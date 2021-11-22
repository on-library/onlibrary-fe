import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Button } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import LayoutAdmin from "../../../components/layouts/admin/layout-admin";
import BookAddForm from "../../../components/pages/admin/book/book-add-form";

const AddBook = () => {
  const bookAddForm = useForm();

  return (
    <LayoutAdmin>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href="/admin/book">Buku</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/admin/book/add">Tambah</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box mt={2}>
        <Heading>Tambah Buku</Heading>
        <Text>Tambah buku pada koleksi buku perpustakaan</Text>
      </Box>
      <Box>
        <BookAddForm bookAddForm={bookAddForm} />
      </Box>
    </LayoutAdmin>
  );
};

export default AddBook;
