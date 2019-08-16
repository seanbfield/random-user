import axios from 'axios'


const BASE_URL = "https://api.randomuser.me/";

export const fetchUser = async (currentUser) => {
  const response = await axios.get(`${BASE_URL}`);
  console.log(response);
  return response.data.results[0]
}

