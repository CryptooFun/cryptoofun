import { JoinToLobby } from '@/lib/lobby';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

/** @type {import('next').NextApiHandler} */
async function handler(req, res) {
  try {
    if (req.method === 'POST') {
      const { accessToken } = await getAccessToken(req, res);
      const statusCode = await JoinToLobby(accessToken, req.body.id);
      return res.status(statusCode).json({});
    }
    return res.status(405).send('Method Not Allowed');
  } catch (err) {
    return res.status(500);
  }
}

export default withApiAuthRequired(handler);
