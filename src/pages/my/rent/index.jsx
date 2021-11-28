import { Box, Heading, Stack, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { useQuery } from "react-query";

import LayoutMy from "../../../components/layouts/my/layout-my";
import BookTable from "../../../components/pages/admin/book/book-table";
import { getBook } from "../../../modules/book/api";

const RentMy = () => {
  const navigate = useNavigate();
  const listBookQuery = useQuery(["book"], () => getBook());

  return (
    <LayoutMy>
      <Box mt={2} justifyContent="space-between">
        <Stack direction="column" justifyContent="center" alignItems="center">
          <Box>
            <Heading>STATUS PEMINJAMAN</Heading>
            <Text align="center">Daftar dan status buku yang ada pinjam</Text>
          </Box>
          <Box></Box>
        </Stack>
      </Box>
    </LayoutMy>
  );
};

export default RentMy;
