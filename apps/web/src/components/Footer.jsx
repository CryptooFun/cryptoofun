import React from 'react';

const Footer = () => {
  return (
    <footer className="fixed right-0 bottom-0 mr-2 mb-2 mt-4">
      <p>© 2022 - {new Date().getFullYear()} CryptooFun</p>
    </footer>
  );
};

export default Footer;
