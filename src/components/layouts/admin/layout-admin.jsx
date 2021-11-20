import { Box } from "@chakra-ui/layout";
import HeaderAdmin from "./header-admin";
import SidebarAdmin from "./sidebar-admin";

const LayoutAdmin = ({ children }) => {
  return (
    <>
      {/* <HeaderAdmin /> */}
      <SidebarAdmin />
      <Box ml={{ base: "0px", lg: "280px" }} px={8} pt={6}>
        {children}
      </Box>
    </>
  );
};

export default LayoutAdmin;
