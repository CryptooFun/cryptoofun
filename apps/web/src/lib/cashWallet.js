const apiOriginUrl = `${process.env.API_CASHWALLET_BASE_URL}/`;

export async function GetWalletBalance(authnToken) {
  const response = await fetch(apiOriginUrl, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authnToken}`,
      'Content-Type': 'application/json',
    },
  });
  const { balance } = await response.json();
  return balance;
}
