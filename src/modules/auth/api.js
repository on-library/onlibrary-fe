import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "auth";

export const login = async ({ username, password }) => {
  const response = await fetchApi.post(ENTRY_API + "/login", {
    username,
    password,
  });
  return response.data;
};

export const getProfile = async () => {
  const response = await fetchApi.get(ENTRY_API + "/profile");
  return response.data;
};
