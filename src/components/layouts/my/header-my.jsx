import { Avatar } from "@chakra-ui/avatar";
import { Button } from "@chakra-ui/button";
import { CheckIcon, SearchIcon } from "@chakra-ui/icons";
import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/input";
import { Box, Divider, Stack, Text } from "@chakra-ui/layout";
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
            align="center"
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
        <Box w="20%" display="flex" flexDir="column" alignItems="center" py={2}>
          {/* <Avatar /> */}
          {/* <Text>User Profile</Text> */}
          <Stack direction="row">
            {" "}
            <Button
              borderRadius={4}
              // variant="outline"
              colorScheme="blue"
              width="full"
              onClick={() => navigate("/my/profile")}
            >
              Sunting Profil
            </Button>
            <Button
              borderRadius={4}
              // variant="outline"
              colorScheme="red"
              width="full"
              onClick={() => navigate("/auth/login")}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      </Box>
      <Divider width={{ base: "90%", lg: "80%" }} mx="auto" />
    </Box>
  );
};

export default HeaderMy;
