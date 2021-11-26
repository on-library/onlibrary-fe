import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "category";

export const getCategories = async () => {
  console.log("object");
  const response = await fetchApi.get(ENTRY_API);
  return response.data;
};
