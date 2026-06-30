import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

export default function Components() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/create-profile" element={<CreateProfileForm />} />
        <Route path="/favorites" element={<ParentFavoritesList />} />
      </Routes>
    </Router>
  );
}