const apiOriginUrl = `${process.env.API_MARKETDATASTREAMER_BASE_URL}/`;

export async function GetMarketRecap() {
  const url = new URL('/market/data/recap', apiOriginUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export async function GetAllowedSymbols() {
  const url = new URL('/market/symbols/allowed', apiOriginUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}

export async function GetPopularsRecap() {
  const url = new URL('/market/data/popular', apiOriginUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return await response.json();
}
