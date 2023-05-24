import React from 'react';
import Image from 'next/image';
import dayjs from 'dayjs';

const Aftermath = ({
  cashBefore,
  cashAfter,
  profitPct,
  Aftermath: {
    createdAt,
    Lobby: { title },
  },
}) => {
  return (
    <div className="flex flex-col justify-center shadow-default">
      <div className="py-8 px-4 flex bg-gri w-60 h-14 justify-center items-center opacity-80 rounded-t-2xl">
        <h1 className="font-bold">{title}</h1>
      </div>

      <div className="w-60 h-full text-dark bg-white opacity-90 rounded-b-2xl my-auto p-4">
        <div className="flex-col flex">
          <p className="capitalize">
            <b>Profit Pct.</b> %{profitPct}
          </p>
          <p>
            <b>Cash Before:</b> {cashBefore}
          </p>
          <p>
            <b>Cash After:</b> {cashAfter}
          </p>
        </div>

        <hr />

        <div className="my-2">
          <Image
            className="inline-block"
            src={'/icons/hourglass.png'}
            width={24}
            height={24}
            alt="Hourglass"
          />
          <p className="mt-2 text-sm">
            {dayjs(createdAt).format('DD MMMM YYYY')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Aftermath;
