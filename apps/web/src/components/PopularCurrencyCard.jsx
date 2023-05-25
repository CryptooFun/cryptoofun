import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Card = ({ symbol, lastPrice, priceChangePercent }) => {
  const router = useRouter();

  const pair0 = symbol.split('USDT')[0];
  const price = Number(lastPrice).toFixed(2);
  const change = Number(priceChangePercent).toFixed(3);

  return (
    <div
      className="flex h-20 w-60 justify-center items-center p-2 rounded-xl bg-white opacity-90 hover:scale-110 cursor-pointer "
      onClick={() => router.push(`/trade/${pair0}_USDT`)}
    >
      <Image
        className=""
        src={`/currency/${pair0}.svg`}
        alt={pair0}
        width={40}
        height={40}
      />
      <div className="flex flex-col">
        <h1 className="flex">
          <span className="ml-2  text-gri font-bold">{pair0 + '/USDT'}</span>
          <span className="ml-2 text-gri font-semibold">
            {change > 0 ? (
              <span className="text-green">{`+${change}`}%</span>
            ) : (
              <span className="text-red">{change}%</span>
            )}
          </span>
        </h1>

        <h2>
          <span className="text-gri">${price}</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
