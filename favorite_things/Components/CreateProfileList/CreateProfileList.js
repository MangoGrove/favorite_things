import { html } from "https://unpkg.com/htm/preact/standalone.module.js";
import { useState } from "https://unpkg.com/htm/preact/standalone.module.js";
import { alreadyExists, createUser } from "../Services/create_profile.js";

function CreateProfileForm() {
  const [profilePic, setProfilePic] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [continent, setContinent] = useState("Africa");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  //resetting page for errors
  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setLoading(true);

    //error handleing
    try {
      const exists = await alreadyExists(username);
      if (exists) {
        setError("That username is already taken. Please try again.");
        return;
      }
      const newProfile = await createUser(
        Date.now(),
        username,
        password,
        continent
      );
      console.log("Profile created:", newProfile);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  //html blueprint
  return html`
    <form onSubmit=${handleSubmit}>
      <h2>Create YOUR Profile</h2>

      <!--Profile Pic-->
      <div class="profilePic">
        <label for="profilePic">Please select your Profile picture</label>
        <br />
        <input
          type="file"
          id="profilePic"
          onChange=${(e) => setProfilePic(e.target.files[0])}
        />
      </div>
      <br /><br />

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

      <!--continent-->
      <label for="continent">Continent:</label>
      <select
        id="continent"
        value=${continent}
        onInput=${(e) => setContinent(e.target.value)}
      >
        <option value="Africa">Africa</option>
        <option value="Antartica">Antartica</option>
        <option value="Asia">Asia</option>
        <option value="Australia">Australia</option>
        <option value="Europe">Europe</option>
        <option value="North America">North America</option>
        <option value="South America">South America</option>
      </select>
      <br />

      <!--submit button-->
      <input
        type="submit"
        value=${loading ? "Creating..." : "Create Profile"}
        disabled=${loading}
      />

      ${error && html`<p style="color:red;">${error}</p>`}
    </form>
  `;
}
export default CreateProfileForm;
