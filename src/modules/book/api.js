import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "book";

export const getBook = async (data) => {
  const response = await fetchApi.get(ENTRY_API + "/all", data);
  return response.data;
};

export const addBook = async () => {
  const response = await fetchApi.post(ENTRY_API + "/add");
  return response.data;
};

export const deleteBook = async (data, token) => {};
