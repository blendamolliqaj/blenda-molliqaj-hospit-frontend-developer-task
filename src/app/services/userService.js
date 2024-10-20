import axios from "axios";

const apiURL = "https://jsonplaceholder.typicode.com/users";

// Fetch all users
export const fetchUsers = async () => {
  const response = await axios.get(apiURL);
  return response.data;
};

// Add user
export const addUser = async (user) => {
  const response = await axios.post(apiURL, user);
  return response.data;
};

// Update user
export const updateUser = async (id, user) => {
  const response = await axios.put(`${apiURL}/${id}`, user);
  return response.data;
};

// Delete user
export const deleteUser = async (id) => {
  const response = await axios.delete(`${apiURL}/${id}`);
  return response.data;
};
