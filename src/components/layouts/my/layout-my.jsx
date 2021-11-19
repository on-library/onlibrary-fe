import { Box } from "@chakra-ui/layout";

const LayoutMy = ({ children }) => {
  return (
    <Box>
      {/* Header */}
      <Box width={{ base: "90%", lg: "80%" }} pb={16} mt={16} mx="auto">
        {children}
      </Box>
    </Box>
  );
};

export default LayoutMy;
