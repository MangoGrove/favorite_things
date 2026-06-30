const axios = window.axios;

const favorites_url = "/json/account_fav.json";

//get the favorites
export const getFavorites = () => {
  return axios
    .get(favorites_url)
    .then((response) => {
      console.log("Favorites fetched:", response.data);
      return response.data;
    })
    .catch((err) => {
      console.log("GET Error:", err);
      return [];
    });
};

export const addFavorite = (favorite) => {
  return axios({
    method: "post",
    url: favorites_url,
    data: favorite,
    headers: { "Content-Type": "application/json" },
  })
    .then((response) => response.data)
    .catch((err) => {
      console.log("POST error:", err);
      return [];
    });
};
