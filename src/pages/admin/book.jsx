import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import LayoutAdmin from "../../components/layouts/admin/layout-admin";
import BookTable from "../../components/pages/admin/book/book-table";

const Book = () => {
  const navigate = useNavigate();
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
      <Box mt={2}>
        <Heading>Daftar Buku</Heading>
        <Text>Koleksi buku yang ada pada perpustakaan</Text>
      </Box>
      <Box mt={4}>
        <Button
          onClick={() => navigate("/admin/book/add")}
          colorScheme="purple"
          leftIcon={<AddIcon />}
        >
          Tambah Buku
        </Button>
      </Box>
      <Box mt={4}>
        <BookTable />
      </Box>
    </LayoutAdmin>
  );
};

export default Book;
