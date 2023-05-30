import Footer from '../Footer';
import Header from '../Header';
import Image from 'next/image';

function DefaultLayout({ children }) {
  return (
    <>
      <Header className="fixed top-0 w-full bg-dark z-10" />

      <div className="fixed -z-10 bg-dark w-full justify-center items-center h-full">
        <Image
          className="max-h-screen mx-auto transparent"
          src={'/bg.png'}
          alt="Background"
          fill
        />
      </div>

      <main className="max-w-max mx-auto text-center">{children}</main>

      <Footer />
    </>
  );
}

export default DefaultLayout;
