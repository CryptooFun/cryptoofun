import DefaultLayout from '@/components/layouts/DefaultLayout';
import Image from 'next/image';
import Search from '../assets/search.svg';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Market() {
  const router = useRouter();

  const { data } = useQuery({
    queryKey: ['market'],
    queryFn: async () => {
      const response = await axios.get('/api/market/recap/');
      return response.data;
    },
    refetchInterval: 1000,
  });

  const [query, setQuery] = useState('');

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-3 text-turkuaz font-bold text-3xl">Market</h1>
      <div className=" w-50 h-0.5 bg-turkuaz rounded-3xl "></div>
      <div className="mt-4 ml-96">
        <div className="relative ml-96 mb-4 flex w-60 flex-wrap items-stretch">
          <input
            type="search"
            className="relative m-0 -mr-0.5 block w-[1px] min-w-0 flex-auto rounded-l border border-solid border-gri opacity-80 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-white outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-white focus:text-white focus:shadow-[inset_0_0_0_1px_rgb(52,224,206)] focus:outline-none   "
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon1"
            onChange={e => setQuery(e.target.value)}
            value={query}
          />

          <button
            className="relative z-[2] flex items-center rounded-r bg-gri ml-0.5 opacity-80 px-6 py-2.5 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-turkuaz hover:shadow-lg focus:bg-turkuaz focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gri active:shadow-lg"
            type="button"
            id="button-addon1"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <Image
              className=""
              src={Search}
              alt="search"
              width={20}
              height={20}
            />
          </button>
        </div>
      </div>

      <table className="w-full text-right">
        <thead>
          <tr className="bg-gri text-white opacity-80 ">
            <th className="text-left">Symbol</th>
            <th>Last Price</th>
            <th>Price Change (24h)</th>
            <th>Volume (24h)</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {(data &&
            data
              .filter(({ symbol }) => {
                if (query == '') {
                  return true;
                }
                return symbol?.toLowerCase().includes(query.toLowerCase());
              })
              .map(({ symbol, lastPrice, priceChangePercent, volume }, i) => {
                const pair0 = symbol.split('USDT')[0];
                const price = Number(lastPrice).toFixed(4);
                const change = Number(priceChangePercent).toFixed(4);
                const vol = Number(volume).toFixed(2);

                return (
                  <tr
                    className="h-full hover:bg-gri hover:cursor-pointer"
                    key={i}
                    onClick={() => router.push(`/trade/${pair0}_USDT`)}
                  >
                    <td className="text-left">
                      <Image
                        className="mr-2 inline-block"
                        src={`/currency/${pair0.toLowerCase()}.svg`}
                        alt={symbol}
                        width={24}
                        height={24}
                      />
                      <span>
                        <b>{pair0}</b> {symbol}
                      </span>
                    </td>
                    <td>
                      <b>{price}</b> $
                    </td>
                    <td className="font-semibold">
                      {change > 0 ? (
                        <span className="text-green">{`+${change}`}%</span>
                      ) : (
                        <span className="text-red">{change}%</span>
                      )}
                    </td>
                    <td>{vol} $</td>
                    <td className="text-turkuaz font-bold">Trade Now</td>
                  </tr>
                );
              })) ||
            []}
        </tbody>
      </table>
    </DefaultLayout>
  );
}

export default Market;
