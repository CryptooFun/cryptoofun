import Content from '../Content';
import Footer from '../Footer';
import Header from '../Header';

function DefaultLayout({ children }) {
  return (
    <> 
      <Header />
      {children}
      <Content />
      <div className='bottom-0 mx-auto w-full fixed'>
      <Footer />
      </div>
    </>
  );
}

export default DefaultLayout;
