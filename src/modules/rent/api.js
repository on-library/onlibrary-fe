import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "rent";

export const getRents = async () => {
  const response = await fetchApi.get(ENTRY_API + "/all");
  return response.data;
};

export const confirmRent = async ({ rent_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/confirm", { rent_id });
  return response.data;
};

export const declineRent = async ({ rent_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/decline", { rent_id });
  return response.data;
};

export const takeRent = async ({ rent_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/take", { rent_id });
  return response.data;
};

export const addRent = async ({ book_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/add", { book_id });
  return response.data;
};

export const extendRent = async ({ rent_id, alasan_perpanjangan }) => {
  const response = await fetchApi.post(ENTRY_API + "/extend", {
    rent_id,
    alasan_perpanjangan,
  });
  return response.data;
};

export const extendConfirmRent = async ({ rent_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/extend/confirm", {
    rent_id,
  });
  return response.data;
};

export const extendDeclineRent = async ({ rent_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/extend/decline", {
    rent_id,
  });
  return response.data;
};

export const returnRent = async ({ rent_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/return", { rent_id });
  return response.data;
};
