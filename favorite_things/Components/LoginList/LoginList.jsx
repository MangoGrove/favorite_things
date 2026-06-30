import { useState } from 'react';
import { alreadyExists } from '../../Services/login.js';

function LoginForm() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const profile = await alreadyExists(username, password);
      if (profile) {
        console.log('Logged in as:', profile);
        // TO BE ADDED LATER: redirect to YourThings page, or set logged-in state
      } else {
        setError('Incorrect username or password.');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <label htmlFor="name">Username:</label>
      <input
        type="text"
        id="name"
        maxLength="30"
        required
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <br />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        maxLength="15"
        required
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />

      <input
        type="submit"
        value={loading ? 'Logging in...' : 'Log In'}
        disabled={loading}
      />

      {error && <p style={{ color: 'red' }}>{error}</p>}
    </form>
  );
}

export default LoginForm;
