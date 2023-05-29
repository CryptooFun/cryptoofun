import { GetAllLobbies } from '@/lib/lobby';
import { getAccessToken } from '@auth0/nextjs-auth0';

/** @type {import('next').NextApiHandler} */
async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { accessToken } = await getAccessToken(req, res);
      const data = await GetAllLobbies(accessToken, {});
      return res.status(200).json(data);
    }
    return res.status(405).send('Method Not Allowed');
  } catch (err) {
    return res.status(500);
  }
}

export default handler;
