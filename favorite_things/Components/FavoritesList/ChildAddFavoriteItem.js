import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { useState } from "https://unpkg.com/htm/preact/standalone.module.js";

function ChildAddFavoriteItem({ onAdd }) {
  const [category, setCategory] = useState("animal");
  const [text, setText] = useState("");
  const [favoritePic, setFavoritePic] = useState(null);

  //submission
  function handleSubmit(e) {
    e.preventDefault();
    onAdd({ accountId: "temp", category, text, file_img: "" });
    setText("");
  }

  //form
  return html`
    <form onSubmit=${handleSubmit}>
      <p>Add a Favorite Thing</p>

      <label for="category">Category:</label>
      <select
        id="category"
        value=${category}
        onInput=${(e) => setCategory(e.target.value)}
      >
        <option value="animal">Animal</option>
        <option value="bug">Bug</option>
        <option value="book">Book</option>
        <option value="color">Color</option>
        <option value="sports">Sport</option>
        <option value="place">Place</option>
      </select>
      <br />

      <label for="favorite">Favorite:</label>
      <input
        type="text"
        id="favorite"
        placeholder="Enter your favorite thing"
        required
        value=${text}
        onInput=${(e) => setText(e.target.value)}
      />

      <!--Favorite Pic-->
      <div class="favoritePic">
        <label for="favoritePic">Please select a picture</label>
        <br />
        <input
          type="file"
          id="favoritePic"
          onChange=${(e) => setFavoritePic(e.target.files[0])}
        />
      </div>
      <br />

      <input type="submit" value="Add Favorite" />
    </form>
  `;
}
//NOTE: using the form to add a new favorite to the page
// is not permanet and the image will not appear because no server is
//connected

export default ChildAddFavoriteItem;
