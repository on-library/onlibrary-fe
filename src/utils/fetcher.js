import axios from "axios";
import { API_URL } from "../constants/endpoint";

export const fetchApi = axios.create({
  baseURL: API_URL,
});

fetchApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = "Bearer " + token;
  }
  return config;
});

// http://ec2-3-16-28-30.us-east-2.compute.amazonaws.com:8080/api/

//
