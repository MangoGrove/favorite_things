import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import {
  useState,
  useEffect,
} from "https://unpkg.com/htm/preact/standalone.module.js";
import { getFavorites, addFavorite } from "../../Services/favorites.js";
import ChildFavoriteItem from "./ChildFavoriteItem.js";
import ChildAddFavoriteItem from "./ChildAddFavoriteItem.js";

function ParentFavoritesList() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    getFavorites()
      .then((data) => setFavorites(data))
      .catch(() => setError("Could not load favorites."))
      .finally(() => setLoading(false));
  }, []);

  async function handleAdd(newFavorite) {
    await addFavorite(newFavorite);
    setFavorites([...favorites, newFavorite]);
  }

  if (loading) return html`<p>Loading...</p>`;
  if (error) return html`<p style="color:red;">${error}</p>`;

  //Pinned favorites list!
  return html`
    <div>
      <h2>Pinned Favorites!</h2>
      <ul class="pinnedFaves">
        ${favorites.map(
          (fav) => html`<${ChildFavoriteItem} favorite=${fav} />`
        )}
      </ul>

      <br />
      <${ChildAddFavoriteItem} onAdd=${handleAdd} />
    </div>
  `;
}

export default ParentFavoritesList;
