import React from 'react';
import Image from 'next/image';
import BTC from '../assets/btc.svg';

const Card = () => {
  return (
    <div className="flex items-center p-2 rounded-xl bg-white opacity-90 hover:scale-110 cursor-pointer ">
      <Image className="" src={BTC} alt="BTC" width={50} height={50} />
      <div className="flex flex-col">
        <h1 className="flex">
          <span className="ml-2  text-gri font-bold"> BTC/USDT </span>
          <span className="ml-2 text-gri "> -8.72% </span>
        </h1>

        <h2>
          <span className="text-gri"> $16,853.71</span>
        </h2>
      </div>
    </div>
  );
};

export default Card;
