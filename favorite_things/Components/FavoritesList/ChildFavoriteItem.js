import { html } from "https://unpkg.com/htm/preact/standalone.module.js";

//one favorite item- gets used
function ChildFavoriteItem({ favorite }) {
  return html`
    <li>
      ${favorite.category}: ${favorite.text}
      <br />
      <img src=${favorite.file_img} alt=${favorite.category} width="150" />
    </li>
  `;
}

export default ChildFavoriteItem;
