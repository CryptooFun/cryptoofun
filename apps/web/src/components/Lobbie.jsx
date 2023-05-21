import React from 'react';
import Image from 'next/image';
import BTC from '../assets/btc.svg';

const Lobbie = () => {
  return (
    <div className="flex flex-col justify-center cursor-pointer hover:scale-110 shadow-default">
      <div className="flex bg-gri w-56 h-12 justify-center items-center opacity-80 rounded-t-2xl">
        <Image
          className="mr-2"
          src={BTC}
          alt="BTC"
          width={28}
          height={28}
        ></Image>

        <h1 className="font-bold">BTC/USDT</h1>
      </div>

      <div className="w-56 h-48  hover:bg-turkuaz bg-white opacity-90 rounded-b-2xl my-auto ">
        <span className="text-dark flex-col flex mt-4 ">
          <tr>4-8 People </tr>
          <tr>1 week </tr>
          <tr>Goal: %8 Profit </tr>
          <tr>Prize: Profit + $400</tr>
        </span>
        <button className=" justify-center items-center  bg-dark opacity-75 py-1 px-6 mt-6 hover:scale-110 rounded-2xl">
          JOIN
        </button>
      </div>
    </div>
  );
};

export default Lobbie;
