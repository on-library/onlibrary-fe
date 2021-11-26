import { Box, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import LayoutMy from "../../../components/layouts/my/layout-my";
import ListBook from "../../../components/pages/my/book/list-book";
import { getBook } from "../../../modules/book/api";

const Book = () => {
  const listBookQuery = useQuery(["book"], () => getBook());

  return (
    <LayoutMy>
      <Text>Hasil Pencarian:</Text>
      {listBookQuery.isLoading ? (
        "Loading..."
      ) : (
        <ListBook listBookQuery={listBookQuery} />
      )}
    </LayoutMy>
  );
};

export default Book;
