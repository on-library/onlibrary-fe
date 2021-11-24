import { Box, Heading } from "@chakra-ui/layout";
import { menuItem } from "./data-sidebar";
import { useNavigate, useLocation } from "react-router-dom";

const SidebarAdmin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let nowPath = location.pathname.split("/")[2];
  return (
    <Box
      display={{ base: "none", lg: "block" }}
      width="280px"
      h="100vh"
      pos="fixed"
      borderRight="1px"
      borderColor="gray.400"
      borderLeftWidth="2px"
    >
      <Box
        display="flex"
        justifyContent="center"
        borderBottom="1px"
        borderColor="gray.300"
        py={2}
        h="64px"
        alignItems="center"
      >
        <Heading fontSize="3xl">OnLibrary</Heading>
      </Box>
      <Box>
        {menuItem.map((item) => {
          if (nowPath === "") {
            nowPath = "dashboard";
          }
          const isPathNow = item.name === nowPath;
          return (
            <Box
              key={item.name}
              h="44px"
              display="flex"
              justifyContent="left"
              pl={4}
              alignItems="center"
              // borderBottom="1px"
              fontSize="md"
              py={4}
              bg={isPathNow ? "gray.200" : "white"}
              cursor="pointer"
              _hover={{
                bg: "gray.200",
              }}
              onClick={() => navigate(item.link)}
            >
              {item.label}
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default SidebarAdmin;
