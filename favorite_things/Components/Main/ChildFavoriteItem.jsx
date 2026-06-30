//one favorite item- gets used

function ChildFavoriteItem({ favorite }) {
  return (
    <li>
      {favorite.category}: {favorite.text}
      <br />
      <img src={favorite.file_img} alt={favorite.category} width="150" />
    </li>
  );
}

export default ChildFavoriteItem;
