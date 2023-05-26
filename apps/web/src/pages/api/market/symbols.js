import { GetAllowedSymbols } from '@/lib/marketData';

/** @type {import('next').NextApiHandler} */
async function handler(req, res) {
  try {
    if (req.method === 'GET') {
      const data = await GetAllowedSymbols();
      return res.status(200).json(data);
    }
    return res.status(405).send('Method Not Allowed');
  } catch (err) {
    console.error('[error]', err);
    return res.status(500);
  }
}

export default handler;
