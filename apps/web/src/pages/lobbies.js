import LobbyCard from '@/components/LobbyCard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { GetAllLobbies } from '@/lib/lobby';
import { useRouter } from 'next/router';

function Lobbies({ data }) {
  const router = useRouter();

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-2 text-turkuaz font-bold text-3xl">
        Trading Lobbies
      </h1>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      {data?.length == 0 && (
        <>
          <h1 className="mt-10 text-2xl">
            No lobby is available at the moment... 🙄
          </h1>
          <h1
            className="mt-10 text-3xl underline hover:cursor-pointer"
            onClick={() => router.reload()}
          >
            🧐 Keep an eye on!
          </h1>
        </>
      )}

      <div className="grid max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-4 mt-8 gap-12">
        {data.map((lobbyInfo, i) => (
          <LobbyCard key={i} {...lobbyInfo} />
        ))}
      </div>
    </DefaultLayout>
  );
}

export default Lobbies;

/** @type {import('next').GetServerSideProps} */
export async function getServerSideProps(ctx) {
  const data = await GetAllLobbies(ctx.query);
  return { props: { data } };
}
