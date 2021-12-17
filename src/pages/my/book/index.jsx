import { Box, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import { useLocation } from "react-router";
import LayoutMy from "../../../components/layouts/my/layout-my";
import ListBook from "../../../components/pages/my/book/list-book";
import { findBook, getBook } from "../../../modules/book/api";

const Book = () => {
  const location = useLocation();

  const search = new URLSearchParams(location.search).get("search");

  const listBookQuery = useQuery(
    ["book", search],
    () => findBook({ book_title: search }),
    {
      enabled: !!search,
    }
  );

  return (
    <LayoutMy>
      <Text>Hasil Pencarian:</Text>
      {listBookQuery.isLoading ? (
        "Loading..."
      ) : listBookQuery.data.data.length <= 0 ? (
        <Box>
          <Text>
            Mohon maaf, hasil pencarian tidak ditemukan. Masukkan kata kunci
            lainnya.
          </Text>
        </Box>
      ) : (
        <ListBook listBookQuery={listBookQuery} />
      )}
    </LayoutMy>
  );
};

export default Book;
