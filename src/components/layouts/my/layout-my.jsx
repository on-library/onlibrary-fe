import { Box, Divider } from "@chakra-ui/layout";
import HeaderMy from "./header-my";

const LayoutMy = ({ children }) => {
  return (
    <Box w="full">
      {/* Header */}
      <HeaderMy />

      <Box width={{ base: "90%", lg: "80%" }} pb={16} mt={16} mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default LayoutMy;
