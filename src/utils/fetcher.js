import axios from "axios";

export const fetchApi = axios.create({
  baseURL: "http://localhost:1323/api/",
});

fetchApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = token;
  }
  return config;
});
