import Footer from '../Footer';
import Header from '../Header';
import Image from 'next/image';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />
      <div className="bg-dark w-full justify-center items-center h-full">
        <Image
          className="max-h-screen mx-auto transparent"
          src={'/bg.png'}
          alt="BackGround"
          fill
        />
      </div>

      {children}

      <div className="bottom-0 mx-auto w-full fixed">
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
