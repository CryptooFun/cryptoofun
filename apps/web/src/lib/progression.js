const apiOriginUrl = `${process.env.API_PROGRESSION_BASE_URL}/`;

export async function GetUserProgression(userId) {
  const url = new URL(encodeURI(userId), apiOriginUrl);

  const response = await fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return await response.json();
}
