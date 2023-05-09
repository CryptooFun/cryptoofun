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
