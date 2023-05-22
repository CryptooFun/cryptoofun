const apiOriginUrl = `${process.env.API_LEADERBOARD_BASE_URL}/`;

export async function GetTop100() {
  const response = await fetch(apiOriginUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
