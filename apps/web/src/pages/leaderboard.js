import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Leaderboard() {
  const { data, isFetching, isError } = useQuery({
    queryKey: ['leaderboard'],
    queryFn: async () => {
      const res = await axios.get('/api/leaderboard/');
      return res.data;
    },
    refetchInterval: 30_000,
  });

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-2 text-turkuaz font-bold text-3xl">Leaderboard</h1>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      {isFetching ? (
        <h1>Updating...</h1>
      ) : isError ? (
        <h1>An error has occurred!</h1>
      ) : (
        data && (
          <table className="w-full  mt-14 text-left">
            <thead className="bg-gri text-white opacity-80">
              <tr>
                <th>#</th>
                <th>Username</th>
                <th>Total Wallet Balance</th>
              </tr>
            </thead>

            <tbody>
              {data.map((user, i) => (
                <tr className="hover:bg-gri" key={i}>
                  <td className="bg-gri">{i + 1}.</td>
                  <td>
                    <b>{user.userName}</b>
                  </td>
                  <td>$ {Number(user.balance).toFixed(4)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </DefaultLayout>
  );
}
