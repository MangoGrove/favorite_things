import { Link } from 'react-router-dom';
import '../../CSS/createProfile.css';
import CreateProfileForm from '../CreateProfileList/CreateProfileList.jsx';

export default function CreateProfilePage() {
  return (
    <div>
      <h1>YOUR Favorite things</h1>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/favorites">View your Things</Link>
        </li>
      </ul>
      <CreateProfileForm />
    </div>
  );
}
