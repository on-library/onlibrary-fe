import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Box, Heading } from "@chakra-ui/layout";
import LayoutAdmin from "../../components/layouts/admin/layout-admin";

const Member = () => {
  return (
    <LayoutAdmin>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/admin/member">
              Anggota Perpustakaan
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Heading mt={2}>Daftar Anggota Perpustakaan</Heading>
      <Box></Box>
    </LayoutAdmin>
  );
};

export default Member;
