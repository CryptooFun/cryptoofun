import React from 'react'
import Image from "next/image";
import Bg from "../assets/Bg.png";

const Content = () => {
    return (
      <div className='bg-dark w-full justify-center items-center h-full'>
        <Image className="w-auto max-h-screen mx-auto transparent" src={Bg} alt="BackGround" />
      </div>
    );
  };
  
  export default Content;