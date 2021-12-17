import { fetchApi } from "../../utils/fetcher";

const ENTRY_API = "review";

export const getReviewsByBook = async ({ book_id }) => {
  const response = await fetchApi.post(ENTRY_API + "/findbybook", {
    book_id,
  });
  return response.data;
};

export const addReview = async ({ bookId, comment, rating }) => {
  const response = await fetchApi.post(ENTRY_API + "/add", {
    bookId,
    comment,
    rating,
  });

  return response.data;
};
