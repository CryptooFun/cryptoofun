import DefaultLayout from '@/components/layouts/DefaultLayout';

function Home() {
  return (
    <DefaultLayout>
      <h1 className="text-teal-500 font-bold">CRYPTOO FUN</h1>
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className="text-white" href="/api/auth/login">
        login
      </a>
      <br />
      {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
      <a className="text-white" href="/api/auth/logout">
        logout
      </a>
    </DefaultLayout>
  );
}

export default Home;
