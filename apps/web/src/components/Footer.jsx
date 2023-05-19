import React from 'react';

const Footer = () => {
  return (
    <div className="h-8 bg-gri opacity-20 text-white flex items-center justify-center">
      © 2022 - {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
