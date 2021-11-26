import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import LayoutAdmin from "../../components/layouts/admin/layout-admin";
import RentTable from "../../components/pages/admin/rent/rent-table";
import { getBook } from "../../modules/book/api";

const Rent = () => {
  const listBookQuery = useQuery(["book"], () => getBook());
  return (
    <LayoutAdmin>
      <Box>
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink href="/admin">Admin</BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem isCurrentPage>
            <BreadcrumbLink href="/admin/member">
              Daftar Peminjaman
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </Box>
      <Box>
        <Heading mt={2} textAlign="center">
          Daftar Peminjaman
        </Heading>
        <Text textAlign="center">
          Koleksi daftar peminjaman yang ada pada perpustakaan
        </Text>
      </Box>

      <Box mt={4}>
        {/* {listBookQuery.isLoading ? ( */}
        {/* "" */}
        {/* ) : ( */}
        {listBookQuery.isLoading ? (
          ""
        ) : (
          <RentTable listBookQuery={listBookQuery} />
        )}

        {/* )} */}
      </Box>
    </LayoutAdmin>
  );
};

export default Rent;
