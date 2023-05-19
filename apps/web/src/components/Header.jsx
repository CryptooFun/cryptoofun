import React from 'react';
import Cryptoofun from "../assets/cryptoofun.svg";
import Markets from "../assets/markets.svg";
import LeaderBoard from "../assets/leaderboard.svg";
import LogOut from "../assets/logout.svg";
import Wallet from "../assets/wallet.svg";
import Lobbies from "../assets/lobbies.svg";
import Profile from "../assets/profile.svg";
import Image from "next/image";
import Link from 'next/link';

const Header = () => {
  return (
    <div className='bg-dark fixed w-full z-10 items-center'>
      <div className='flex rounded-b-3xl w-full relative h-14 bg-gradient-to-r from-turkuaz via-gri to-gri'> 
        <div className='flex items-center mt-1 ml-3 w-52 cursor-pointer'>
          <Image className="" src={Cryptoofun} alt="logo" />
        </div>
        <div className='flex ml-auto mr-3 cursor-pointer'>
          <button className='flex items-center justify-center ml-12  hover:scale-110'> 
          <Link className='justify-center items-center' href={"/market"}>
            <span className='font-semibold text-white  hover:text-turkuaz mr-2'>Markets</span>
            <Image  src={Markets} alt='market' width={20} height={20} />
            </Link>
          </button>
         
          <button className='flex items-center ml-12 hover:scale-110'> 
            <span className='font-semibold  hover:text-turkuaz text-white mr-2'>Leaderboard</span>
            <Image src={LeaderBoard} alt='market' width={20} height={20} />
          </button>
          <button className='flex items-center ml-12 hover:scale-110'> 
            <span className='font-semibold  hover:text-turkuaz text-white mr-2'>Lobbies</span>
            <Image src={Lobbies} alt='market' width={20} height={20} />
          </button>
          <button className='flex items-center ml-12 hover:scale-110'> 
            <span className='font-semibold  hover:text-turkuaz text-white mr-2'>Wallet</span>
            <Image src={Wallet} alt='market' width={20} height={20} />
          </button>
          <button className='flex items-center ml-12 hover:scale-110'> 
            <span className='font-semibold  hover:text-turkuaz text-white mr-2'>Profile</span>
            <Image src={Profile} alt='market' width={20} height={20} />
          </button>
          <button className='flex items-center ml-12 mr-4 hover:scale-110'> 
            <Image src={LogOut} alt='market' width={20} height={20} />
            <span className='font-semibold  hover:text-turkuaz text-white ml-2'>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;

