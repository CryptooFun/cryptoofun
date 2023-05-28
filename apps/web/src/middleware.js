import { withMiddlewareAuthRequired } from '@auth0/nextjs-auth0/edge';

export default withMiddlewareAuthRequired();

export const config = {
  matcher: [
    '/trade/:path*',
    '/lobbies/:path*',
    '/assets:path*',
    '/profile:path*',
    '/orders/:path*',
  ],
};
