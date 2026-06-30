import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { useState } from "https://unpkg.com/htm/preact/standalone.module.js";
import { alreadyExists } from "../Services/login.js";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const profile = await alreadyExists(username, password);
      if (profile) {
        console.log("Logged in as:", profile);
        //TO BE ADDED LATER: redirect to YourThings page, or set logged-in state
      } else {
        setError("Incorrect username or password.");
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return html`
    <form onSubmit=${handleSubmit}>
      <h2>Login</h2>

      <!--Username-->
      <label for="name">Username:</label>
      <input
        type="text"
        id="name"
        maxlength="30"
        required
        value=${username}
        onInput=${(e) => setUsername(e.target.value)}
      />
      <br />

      <!--Password-->
      <label for="password">Password:</label>
      <input
        type="password"
        id="password"
        maxlength="15"
        required
        value=${password}
        onInput=${(e) => setPassword(e.target.value)}
      />
      <br />

      <!--submit-->
      <input
        type="submit"
        value=${loading ? "Logging in..." : "Log In"}
        disabled=${loading}
      />

      ${error && html`<p style="color:red;">${error}</p>`}
    </form>
  `;
}

export default LoginForm;
