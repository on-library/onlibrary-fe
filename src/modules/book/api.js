import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "book";

export const addBook = async (data) => {
  // if(token){

  // }
  const response = await fetchApi.post(ENTRY_API + "/add", data);
  return response.data;
};

export const deleteBook = async (data, token) => {
  // const response = await
};
