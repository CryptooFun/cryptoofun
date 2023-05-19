import '@/globals.css';

import { DM_Sans } from 'next/font/google';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const dmSans = DM_Sans({
  weight: ['400', '500', '700'],
  subsets: ['latin', 'latin-ext'],
});

const queryClient = new QueryClient();

export default function App({ Component, pageProps }) {
  return (
    <UserProvider>
      <QueryClientProvider client={queryClient}>
        <div className={dmSans.className}>
          <Component {...pageProps} />
        </div>
      </QueryClientProvider>
    </UserProvider>
  );
}
