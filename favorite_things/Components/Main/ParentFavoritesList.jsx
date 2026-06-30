//import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

//having trouble louding this page specifically 
//the other files seem to be wull placed, and connected to the adult file as it should be 
//however this file is not loading and I am not sure why.
import {
  useState,
  useEffect,
} from "react"
//"https://unpkg.com/htm/preact/standalone.module.js";
import { getFavorites, addFavorite } from "../../Services/favorites.js";
import ChildFavoriteItem from "./ChildFavoriteItem.jsx";
import ChildAddFavoriteItem from "./ChildAddFavoriteItem.jsx";

function ParentFavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFavorites()
      .then((data) => setFavorites(data))
      .catch(() => setError('Could not load favorites.'))
      .finally(() => setLoading(false));
  }, []);

  async function handleAdd(newFavorite) {
    await addFavorite(newFavorite);
    setFavorites([...favorites, newFavorite]);
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: 'red' }}>{error}</p>;

  return (
    <div>
      <h2>Pinned Favorites!</h2>
      <ul className="pinnedFaves">
        {favorites.map((fav) => (
          <ChildFavoriteItem key={fav.id || fav.text} favorite={fav} />
        ))}
      </ul>
      <br />
      <ChildAddFavoriteItem onAdd={handleAdd} />
    </div>
  );
}

export default ParentFavoritesList;
