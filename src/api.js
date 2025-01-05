import axios from "axios";

const api = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

//fetch the data
export const fetchData = async () => {
  const response = await api.get("/posts");
  return response.status === 200 ? response.data : [];
};
