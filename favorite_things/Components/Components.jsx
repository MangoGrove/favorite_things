import Home from './Home/Home.jsx';
import LoginPage from './LoginPage/LoginPage.jsx';
import CreateProfilePage from './CreateProfilePage/CreateProfilePage.jsx';
import YourThings from './YourThings/YourThings.jsx';


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/create-profile" element={<CreateProfilePage />} />
        <Route path="/favorites" element={<YourThings />} />
      </Routes>
    </Router>
  );
}