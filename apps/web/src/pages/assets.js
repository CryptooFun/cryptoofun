import DefaultLayout from '@/components/layouts/DefaultLayout';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

function Assets() {
  const router = useRouter();

  const { data: balance } = useQuery({
    queryKey: ['user-wallet-balance'],
    queryFn: async () => {
      const res = await axios.get('/api/assets/wallet/');
      return res.data;
    },
  });

  const { data: portfolio } = useQuery({
    queryKey: ['user-portfolio'],
    queryFn: async () => {
      const res = await axios.get('/api/assets/portfolio/');
      return res.data;
    },
  });

  const [hideBalance, setHideBalance] = useState(false);
  const hideBalanceIcon = () =>
    hideBalance
      ? {
          icon: 'eye-close',
          alt: 'Eyes close',
        }
      : {
          icon: 'eye-open',
          alt: 'Eyes open',
        };

  return (
    <DefaultLayout>
      <h1 className="mt-8 mb-3 text-turkuaz font-bold text-3xl">Assets</h1>
      <div className="w-50 h-0.5 bg-turkuaz rounded-3xl "></div>

      <div className="mt-4 text-right">
        <Link
          className="text-center text-turkuaz border border-solid rounded-md p-2 transition-all hover:bg-turkuaz hover:text-gri hover:semi-bold"
          href={'/orders/history'}
        >
          See Order History {' >'}
        </Link>
      </div>

      <div className="text-left">
        <div className="text-center font-extrabold rounded-2xl p-3 w-auto bg-gri text-2xl mt-8 inline-block">
          {balance ? (
            <p className="text-turkuaz">
              $ {hideBalance ? '*******' : Number(balance)}
            </p>
          ) : (
            <p className="font-normal text-sm">
              <i>Loading...</i>
            </p>
          )}

          <div
            className="hover:cursor-pointer"
            onClick={() => setHideBalance(!hideBalance)}
          >
            <p className="text-white text-lg inline-block mr-2">Cash Balance</p>
            <Image
              className="inline-block"
              src={`/icons/${hideBalanceIcon().icon}.png`}
              width={20}
              height={20}
              alt={hideBalanceIcon().alt}
            />
          </div>
        </div>
      </div>

      <h3 className="mt-8 font-bold text-xl text-left">Portfolio</h3>
      <table className="w-full  mt-4 text-left">
        <thead className="bg-gri  text-white opacity-80 ">
          <tr>
            <th>Coin</th>
            <th>Amount</th>
            <th>Cost</th>
            <th></th>
          </tr>
        </thead>

        {portfolio && (
          <tbody>
            {portfolio.map(({ ticker, amount, cost }, i) => {
              const pair = ticker.split(/[-_\s]/);

              return (
                <tr
                  key={i}
                  className="h-16 hover:cursor-pointer hover:bg-gri"
                  onClick={() => router.push(`/trade/${ticker}`)}
                >
                  <td>
                    <Image
                      className="mr-4 inline-block"
                      src={`/currency/${pair[0].toLowerCase()}.svg`}
                      alt={''}
                      width={28}
                      height={28}
                    />
                    <span>
                      <b>{pair[0]}</b> {pair[0] + pair[1]}
                    </span>
                  </td>
                  <td>{amount}</td>
                  <td>$ {cost}</td>
                  <td className="text-turkuaz font-bold">Trade Now</td>
                </tr>
              );
            })}
          </tbody>
        )}
      </table>
    </DefaultLayout>
  );
}

export default Assets;
