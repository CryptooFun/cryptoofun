import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';

function Assets() {
  const router = useRouter();

  const { data: balance } = useQuery({
    queryKey: ['user-wallet-balance'],
    queryFn: async () => {
      const res = await axios.get('/api/assets/');
      return res.data;
    },
  });

  const data = [
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'AVAX',
      name: 'Avalanche',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
    {
      symbol: 'BTC',
      name: 'Bitcoin',
      price: 1000,
      change: 12.512,
      volume: 32_000_546,
      marketCap: 322_712_080_040,
    },
  ];

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-3 text-turkuaz font-bold text-3xl">Assets</h1>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      {balance && (
        <div className="text-left">
          <span className="text-xl">
            <b>Cash Balance = </b>
          </span>
          <div className="font-extrabold rounded-2xl p-3 w-auto items-center justify-center bg-gri text-2xl mt-4 inline-block">
            <span className="text-turkuaz">${Number(balance)} </span>
          </div>
        </div>
      )}

      <table className="w-full  mt-4 text-left">
        <thead className="bg-gri  text-white opacity-80 ">
          <tr>
            <th>Coin</th>
            <th>Available Amount</th>
            <th>Value</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {data.map(({ name, symbol }, i) => (
            <tr
              key={i}
              className="hover:cursor-pointer hover:bg-gri"
              onClick={() => router.push(`/trade/${symbol}_USDT`)}
            >
              <td>
                <Image
                  className="mr-2 inline-block"
                  src={`/currency/${symbol.toLowerCase()}.svg`}
                  alt={''}
                  width={24}
                  height={24}
                />
                <span>
                  <b>{symbol}</b> {name}
                </span>
              </td>
              <td>0.245</td>
              <td>$4165</td>
              <td className="text-turkuaz font-bold">Trade Now</td>
            </tr>
          ))}
        </tbody>
      </table>
    </DefaultLayout>
  );
}

export default Assets;
