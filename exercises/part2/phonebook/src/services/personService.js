import axios from "axios";
const baseUrl = "/api/persons";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  const response = await axios.post(baseUrl, newObject);
  return response.data;
};

const update = async (id, newObject) => {
  await axios.put(`${baseUrl}/${id}`, newObject);
};

const remove = async (id) => {
  await axios.delete(`${baseUrl}/${id}`);
};

export default { getAll, create, update, remove };
