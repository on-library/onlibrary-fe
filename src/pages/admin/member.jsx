import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/breadcrumb";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import LayoutAdmin from "../../components/layouts/admin/layout-admin";
import MemberTable from "../../components/pages/admin/member/member-table";
import { getListAuth } from "../../modules/auth/api";

const Member = () => {
  const memberQuery = useQuery(["member"], () => getListAuth());

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
      <Text>List anggota perpustakaan</Text>
      {memberQuery.isLoading ? (
        "Loading..."
      ) : (
        <Box mt={4}>
          <MemberTable memberQuery={memberQuery} />
        </Box>
      )}
    </LayoutAdmin>
  );
};

export default Member;
