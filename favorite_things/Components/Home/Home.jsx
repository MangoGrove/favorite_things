import { Link } from 'react-router-dom';
import '../../CSS/home.css';


export default function Home() {
  return (
    <div>
      <h1>YOUR Favorite things</h1>
      <h2>The place to keep track of ALL your favorite things!</h2>

      <ul className="navigation">
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/create-profile">Create your Profile</Link>
        </li>
        <li>
          <Link to="/favorites">View your Things</Link>
        </li>
      </ul>
    </div>
  );
}


