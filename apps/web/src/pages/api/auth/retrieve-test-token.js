import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

async function retrieveTestToken(req, res) {
  if (process.env.NODE_ENV !== 'production') {
    const { accessToken } = await getAccessToken(req, res);
    return res.status(200).send(accessToken);
  } else {
    return res.status(405).send('Method Not Allowed');
  }
}

export default withApiAuthRequired(retrieveTestToken);
