import { Avatar } from "@chakra-ui/avatar";
import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Box, Divider, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";

const HeaderMy = () => {
  const navigate = useNavigate();
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
            onClick={() => navigate("/my/book/")}
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
          <Text>User Profile</Text>
        </Box>
      </Box>
      <Divider width={{ base: "90%", lg: "80%" }} mx="auto" />
    </Box>
  );
};

export default HeaderMy;
