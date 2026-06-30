import { Link } from 'react-router-dom';
import '../../Login/login.css';
import LoginForm from '../LoginList/LoginList.jsx';

export default function LoginPage() {
  return (
    <div>
      <h1>YOUR Favorite things</h1>
      <ul className="navigation">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-profile">Create your Profile</Link>
        </li>
        <li>
          <Link to="/favorites">View your Things</Link>
        </li>
      </ul>
      <LoginForm />
    </div>
  );
}
