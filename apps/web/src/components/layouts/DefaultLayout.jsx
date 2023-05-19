import Footer from '../Footer';
import Header from '../Header';
import Image from 'next/image';

function DefaultLayout({ children }) {
  return (
    <>
      <Header />

      <div className="absolute -z-10 bg-dark w-full justify-center items-center h-full">
        <Image
          className="max-h-screen mx-auto transparent"
          src={'/bg.png'}
          alt="Background"
          fill
        />
      </div>

      <main className="max-w-max mx-auto text-center">{children}</main>

      <div className="bottom-0 mx-auto w-full fixed">
        <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
