import dayjs from 'dayjs';

const apiOriginUrl = `${process.env.API_TRADEBUTLER_BASE_URL}/`;

async function CreateMarketOrder(authnToken, data) {
  const response = await fetch(apiOriginUrl, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authnToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  return await response.json();
}

export async function CreateMarketBuyOrder({ authnToken, ticker, amount }) {
  return await CreateMarketOrder(authnToken, {
    ticker,
    amount,
    orderType: 'MARKET',
    intent: 'BUY',
    price: -1,
  });
}

export async function CreateMarketSellOrder({ authnToken, ticker, amount }) {
  return await CreateMarketOrder(authnToken, {
    ticker,
    amount,
    orderType: 'MARKET',
    intent: 'SELL',
    price: -1,
  });
}

export async function GetMyOrders({ authnToken, ticker }) {
  const url = new URL('/', apiOriginUrl);
  if (ticker) {
    url.searchParams.set('ticker', ticker);
  }

  const lastWeek = dayjs().subtract(1, 'week').format('YYYY-MM-DD');
  url.searchParams.set('dateAfter', lastWeek);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authnToken}`,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
