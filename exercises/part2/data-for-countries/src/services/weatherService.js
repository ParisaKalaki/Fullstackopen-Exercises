import axios from "axios";
const API_key = import.meta.env.VITE_API_KEY;
// variable api_key now has the value set in startup
//const API_key = "f18a0a0525b73dc181e8332e4e4123f6";
console.log(API_key);
const baseUrl = "https://api.openweathermap.org/data/2.5/weather?";

const getAll = async (capital) => {
  const response = await axios.get(`${baseUrl}q=${capital}&APPID=${API_key}`);
  return response.data;
};

export default { getAll };
