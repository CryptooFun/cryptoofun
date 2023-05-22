const apiOriginUrl = `${process.env.API_PORTFOLIO_BASE_URL}/`;

export async function GetPortfolio(authnToken) {
  const response = await fetch(apiOriginUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authnToken}`,
      'Content-Type': 'application/json',
    },
  });
  const { portfolio } = await response.json();
  return portfolio;
}
