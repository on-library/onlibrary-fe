import { Avatar } from "@chakra-ui/avatar";
import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Box, Divider, Text } from "@chakra-ui/layout";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { getProfile } from "../../../modules/auth/api";

const HeaderMy = () => {
  const navigate = useNavigate();
  const profileQuery = useQuery(
    ["profile", localStorage.getItem("token")],
    () => getProfile()
  );

  return (
    <Box>
      <Box
        d="flex"
        height="100px"
        py={4}
        width={{ base: "90%", lg: "80%" }}
        mx="auto"
      >
        <Box w="15%" alignSelf="start" py={2}>
          <Text
            fontSize="lg"
            textTransform="uppercase"
            fontWeight="semibold"
            cursor="pointer"
            onClick={() => navigate("/my/")}
            _hover={{ textColor: "purple.500" }}
          >
            Beranda
          </Text>
        </Box>
        <Box w="15%" py={2}>
          <Text
            fontSize="lg"
            cursor="pointer"
            textTransform="uppercase"
            fontWeight="semibold"
            onClick={() => navigate("/my/rent/")}
            _hover={{ textColor: "purple.500" }}
          >
            Status
            <br />
            Peminjaman
          </Text>
        </Box>
        <Box w="38%" mx="2%" py={2}>
          <InputGroup>
            <Input placeholder="Cari...." />
            <InputRightElement children={<SearchIcon color="gray.300" />} />
          </InputGroup>
        </Box>
        <Box w="20%" display="flex" flexDir="column" alignItems="center">
          <Avatar />
          <Text>{profileQuery.data?.user?.username}</Text>
        </Box>
      </Box>
      <Divider width={{ base: "90%", lg: "80%" }} mx="auto" />
    </Box>
  );
};

export default HeaderMy;
