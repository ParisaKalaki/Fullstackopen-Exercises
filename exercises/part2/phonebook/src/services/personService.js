import axios from "axios";
const baseUrl = "/api/persons";

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const create = async (newObject) => {
  try {
    const response = await axios.post(baseUrl, newObject);
    return response.data;
  } catch (error) {
    return error.response.data.error;
  }
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
