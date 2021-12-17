import { Button } from "@chakra-ui/button";
import { Flex, Box, Divider, Stack, Text } from "@chakra-ui/layout";
import { Spacer } from "@chakra-ui/react";
import { useState } from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router";
import { getProfile } from "../../../modules/auth/api";
import LogoutModal from "./logout-modal";

const HeaderMy = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState();

  const profileQuery = useQuery(
    ["profile", localStorage.getItem("token")],
    () => getProfile()
  );

  const logout = () => {
    setIsOpen(true);
    // localStorage.removeItem("token");
    // localStorage.removeItem("guard_role");
    // navigate("/auth/login");
  };

  return (
    <Box>
      <Flex
        height="100px"
        py={4}
        width={{ base: "90%", lg: "80%" }}
        mx="auto"
        alignItems="center"
      >
        <LogoutModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        {/* <Text>{profileQuery.data?.user?.username}</Text> */}
        <Box>
          <Text
            mr="24"
            align="center"
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
        <Box>
          <Text
            align="center"
            fontSize="lg"
            cursor="pointer"
            textTransform="uppercase"
            fontWeight="semibold"
            onClick={() => navigate("/my/rent/")}
            _hover={{ textColor: "purple.500" }}
          >
            Status Peminjaman
          </Text>
        </Box>
        <Spacer />
        <Box>
          <Stack direction="row">
            <Button
              borderRadius={4}
              colorScheme="blue"
              width="full"
              px={8}
              onClick={() => navigate("/my/profile")}
            >
              Sunting Profil
            </Button>
            <Button
              borderRadius={4}
              colorScheme="red"
              width="full"
              onClick={() => logout()}
            >
              Logout
            </Button>
          </Stack>
        </Box>
      </Flex>
      <Divider width={{ base: "90%", lg: "80%" }} mx="auto" />
    </Box>
  );
};

export default HeaderMy;
