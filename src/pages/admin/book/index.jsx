import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import LayoutAdmin from "../../../components/layouts/admin/layout-admin";
import BookTable from "../../../components/pages/admin/book/book-table";
import { getBook } from "../../../modules/book/api";

const Book = () => {
  const navigate = useNavigate();

  const listBookQuery = useQuery(["rents"], () => getBook());

  return (
    <LayoutAdmin>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="#">Admin</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="#">Buku</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Box>
          <Heading>Daftar Buku</Heading>
          <Text>Koleksi buku yang ada pada perpustakaan</Text>
        </Box>
        <Box mt={2}>
          <Button
            width="220px"
            onClick={() => navigate("/admin/book/add")}
            colorScheme="green"
            leftIcon={<AddIcon />}
          >
            Tambah Buku
          </Button>
        </Box>
      </Box>

      <Box mt={4}>
        {listBookQuery.isLoading ? (
          ""
        ) : listBookQuery.data?.data == null ? (
          <Box></Box>
        ) : (
          <BookTable listBookQuery={listBookQuery} />
        )}
      </Box>
    </LayoutAdmin>
  );
};

export default Book;
