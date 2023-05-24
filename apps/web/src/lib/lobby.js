const apiOriginUrl = `${process.env.API_LOBBY_BASE_URL}/`;

export async function GetAllLobbies(query) {
  const url = new URL('/lobby', apiOriginUrl);

  for (const [k, v] of Object.entries(query)) {
    if (v) {
      url.searchParams.set(k, v);
    }
  }

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function GetMyAftermaths(authnToken) {
  const url = new URL('/lobby/me/aftermath', apiOriginUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${authnToken}`,
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}

export async function JoinToLobby(authnToken, id) {
  const url = new URL('/lobby/join', apiOriginUrl);

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${authnToken}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ lobbyId: id }),
  });
  return response.status;
}
