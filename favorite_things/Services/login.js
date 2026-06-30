const axios = window.axios;

const profile_url = "/json/profiles.json";

// get all profiles
export const getallProfiles = () => {
  return (
    axios
      // .get(`${url}/users`)
      .get(profile_url) // call the json file

      .then((response) => {
        console.log("Profiles fetched: ", response.data);
        return response.data;
      })
      .catch((err) => {
        console.log("GET Error: ", err);
        return []; //if no information is recieved then return an empty list
      })
  );
};

//check if profil alredy exist
export const alreadyExists = async (username, password) => {
  const fullList = await getallProfiles();

  // .some() <-- function that checks if at least one element matches
  const exists_profile = fullList.some(
    (profile) => profile.username === username && profile.password === password
  );

  if (exists_profile) {
    console.log("Login successful!", exists_profile);
    alert("Login Successful!");
    return exists_profile; // Return the whole user object
  } else {
    alert("Incorrect username or password.");
    return null;
  }
};
