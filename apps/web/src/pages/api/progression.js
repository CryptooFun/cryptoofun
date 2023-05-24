import { GetUserProgression } from '@/lib/progression';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

/** @type {import('next').NextApiHandler} */
async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const { user } = await getSession(req, res);
      const data = await GetUserProgression(user.sub);
      return res.status(200).json(data);
    }
    return res.status(405).send('Method Not Allowed');
  } catch (err) {
    return res.status(500);
  }
}

export default withApiAuthRequired(handler);
