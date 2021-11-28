import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "auth";

export const login = async () => {
  const response = await fetchApi.get(ENTRY_API + "/login");
  return response.data;
};
