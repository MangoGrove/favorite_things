import { Link } from 'react-router-dom';
import '../../YourThings/myThings.css';
import ParentFavoritesList from '../Main/ParentFavoritesList.jsx';

export default function YourThings() {
  return (
    <div>
      <h1>My Things</h1>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create-profile">Create your Profile</Link>
        </li>
      </ul>
      <ParentFavoritesList />
    </div>
  );
}
