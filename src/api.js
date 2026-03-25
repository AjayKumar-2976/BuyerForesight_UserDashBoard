import axios from "axios";

const BASE_URL = "https://jsonplaceholder.typicode.com/users";

export const getUsers = () => axios.get(BASE_URL);
export const getUserById = (id) => axios.get(`${BASE_URL}/${id}`);