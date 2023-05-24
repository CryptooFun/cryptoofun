import { GetAllLobbies } from '@/lib/lobby';

/** @type {import('next').NextApiHandler} */
async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await GetAllLobbies({});
      return res.status(200).json(data);
    }
    return res.status(405).send('Method Not Allowed');
  } catch (err) {
    return res.status(500);
  }
}

export default handler;
