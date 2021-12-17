import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import LayoutMy from "../../../components/layouts/my/layout-my";
import RentTableMy from "../../../components/pages/my/rent/rent-table-my";
import { getProfile } from "../../../modules/auth/api";

const Rent = () => {
  const profileQuery = useQuery(
    ["profiled", localStorage.getItem("token")],
    () => getProfile()
  );

  return (
    <LayoutMy>
      <Heading>Status Peminjaman Buku</Heading>
      <Text>Daftar status buku</Text>

      {profileQuery.isLoading ? (
        "Loading..."
      ) : profileQuery.data?.user.rents.length <= 0 ? (
        <Box>
          <Alert status="warning">
            <AlertIcon />
            Belum ada buku yang dipinjam
          </Alert>
        </Box>
      ) : (
        <Box mt={8}>
          <RentTableMy profileQuery={profileQuery} />
        </Box>
      )}
    </LayoutMy>
  );
};

export default Rent;
