import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "auth";

export const login = async ({ username, password }) => {
  const response = await fetchApi.post(ENTRY_API + "/login", {
    username,
    password,
  });
  return response.data;
};

export const postRegister = async ({
  username,
  password,
  name,
  nim,
  tanggal_lahir,
  email,
  address,
}) => {
  const response = await fetchApi.post(ENTRY_API + "/register", {
    username,
    password,
    name,
    nim,
    tanggal_lahir,
    email,
    address,
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await fetchApi.get(ENTRY_API + "/profile");
  return response.data;
};

export const getListAuth = async () => {
  const response = await fetchApi.get(ENTRY_API + "/all");
  return response.data;
};

export const verifyAuth = async ({ code, username }) => {
  const response = await fetchApi.post(ENTRY_API + "/verify", {
    code,
    username,
  });
  return response.data;
};
