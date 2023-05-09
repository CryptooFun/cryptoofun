import { CreateMarketBuyOrder, CreateMarketSellOrder } from '@/lib/tradeButler';
import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';

const isBuyIntent = i => i.toLowerCase() === 'buy';
const isSellIntent = i => i.toLowerCase() === 'sell';

/** @type {import('next').NextApiHandler} */
async function handler(req, res) {
  if (req.method === 'POST') {
    const { intent } = req.query;
    const { ticker, amount } = req.body;
    const { accessToken } = await getAccessToken(req, res);

    let response = null;
    if (isBuyIntent(intent)) {
      response = await CreateMarketBuyOrder({
        authnToken: accessToken,
        ticker,
        amount,
      });
    } else if (isSellIntent(intent)) {
      response = await CreateMarketSellOrder({
        authnToken: accessToken,
        ticker,
        amount,
      });
    } else {
      return res
        .status(400)
        .send('Invalid Intent, expects ".../market/{buy, sell}"');
    }
    return res.status(200).send(response);
  }
  return res.status(405).send('Method Not Allowed');
}

export default withApiAuthRequired(handler);
