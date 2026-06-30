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

//check if username alredy exist
export const alreadyExists = async (username) => {
  const fullList = await getallProfiles();

  // .some() <-- function that checks if at least one element matches
  const exists = fullList.some((profile) => profile.username === username);
  if (exists) {
    alert("Username Available")
  }
  else{
    alert("Oh oh, username has been taken")
  }
  return exists; // Returns true or false
};

//write to json file
export const addedProfile = (response) => {
  //to be added: seems like js doesn't like writting back to json file,without server inbetween
  //read file

  //add to read file

  //write back to json file

  return true; //marked as success
};

//add  new username to json file --> send 'signal' to add to json file

export const createUser = (id, username, password, continent) => {
  return axios({
    method: "post",
    url: `${profile_url}`,
    data: {
      id,
      username,
      password,
      continent,
    },
    headers: {
      "Content-Type": "application/json",
    },
    json: true,
  })
    .then((response) => {
      console.log("POST response: ", response);
      return response.data; //return information about new user profile
    })
    .catch((err) => {
      console.log("POST error: ", err);
      return [];
    });
};
