import { Box, Text } from "@chakra-ui/layout";
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
      <Box
        bg="gray.300"
        p="3"
        borderRadius="md"
        borderWidth="1px"
        borderColor="gray.500"
      >
        <Text textTransform="uppercase">Status Peminjaman Buku</Text>
      </Box>

      {profileQuery.isLoading ? (
        "Loading..."
      ) : (
        <Box mt={8}>
          <RentTableMy profileQuery={profileQuery} />
        </Box>
      )}
    </LayoutMy>
  );
};

export default RentMy;
