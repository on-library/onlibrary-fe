import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "book";

export const getBook = async () => {
  const response = await fetchApi.get(ENTRY_API + "/all");
  return response.data;
};

export const getDetailBook = async (id) => {
  const response = await fetchApi.get(ENTRY_API + "/" + id);
  return response.data;
};

export const addBook = async (data) => {
  const response = await fetchApi.post(ENTRY_API + "/add", data);
  return response.data;
};

export const deleteBook = async (data) => {
  const response = await fetchApi.delete(ENTRY_API + `/${data.book_id}`);
  return response.data;
};
