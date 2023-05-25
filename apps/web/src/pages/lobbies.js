import LobbyCard from '@/components/LobbyCard';
import AftermathCard from '@/components/AftermathCard';
import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Lobbies() {
  const router = useRouter();

  const [showAftermath, setShowAftermath] = useState(false);

  const { data } = useQuery({
    queryKey: ['lobbies', showAftermath],
    queryFn: async () => {
      let res;
      if (showAftermath) {
        res = await axios.get('/api/lobby/aftermath');
      } else {
        res = await axios.get('/api/lobby/all');
      }
      return res.data;
    },
  });

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-2 text-turkuaz font-bold text-3xl">
        Trading Lobbies
      </h1>
      <div className="mt-8 justify-between flex">
        <button
          className="flex-auto mr-8 rounded-l w-40 border opacity-80 bg-turkuaz bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none "
          onClick={() => setShowAftermath(false)}
        >
          Open Lobbies
        </button>
        <button
          className="flex-auto ml-8 rounded-l w-40 border opacity-80 bg-turkuaz bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none "
          onClick={() => setShowAftermath(true)}
        >
          Past Lobbies
        </button>
      </div>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      {data?.length == 0 && !showAftermath && (
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
        {showAftermath ? (
          <>
            {data?.map((aftermathInfo, i) => (
              <AftermathCard key={i} {...aftermathInfo} />
            ))}
          </>
        ) : (
          <>
            {data?.map((lobbyInfo, i) => (
              <LobbyCard key={i} {...lobbyInfo} />
            ))}
          </>
        )}
      </div>
    </DefaultLayout>
  );
}

export default Lobbies;
