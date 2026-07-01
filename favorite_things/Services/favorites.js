const favorites_url = "./json/account_fav.json";

async function parseFavoritesResponse(response) {
  const text = await response.text();

  if (!text) {
    return [];
  }

  try {
    const data = JSON.parse(text);
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.log("Favorites parse error:", err);
    return [];
  }
}

export const getFavorites = async () => {
  try {
    const response = await fetch(favorites_url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await parseFavoritesResponse(response);
    console.log("Favorites fetched:", data);
    return data;
  } catch (err) {
    console.log("GET Error:", err);
    return [];
  }
};

export const addFavorite = async (favorite) => {
  try {
    const response = await fetch(favorites_url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(favorite),
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await parseFavoritesResponse(response);
  } catch (err) {
    console.log("POST error:", err);
    return [];
  }
};
