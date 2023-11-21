import axios from "axios";
const baseUrl = "https://studies.cs.helsinki.fi/restcountries";

const getAll = async () => {
  const response = await axios.get(`${baseUrl}/api/all`);
  return response.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  try {
    await axios.put(`${baseUrl}/${id}`, newObject);
  } catch (error) {
    return error;
  }
};

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, remove };
