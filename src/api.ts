import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "",
  timeout: 1000,
});

export const getNewsApi = () => {
  return axiosInstance
    .get("https://jsonplaceholder.typicode.com/todos/1")
    .then((res) => res.data);
};
