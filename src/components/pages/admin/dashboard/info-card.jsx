import { Box, Divider, Text } from "@chakra-ui/layout";

const InfoCard = () => {
  return (
    <Box height="160px" borderWidth="1px" borderRadius="md">
      <Box
        p={4}
        display="flex"
        flexDir="column"
        h="full"
        justifyContent="space-between"
      >
        <Box>
          <Text>INFO_STATUS_PERPUSTAKAAN</Text>
        </Box>
        <Box display="flex" flexDir="column" experimental_spaceY="0.2">
          <Text textAlign="right" fontSize="4xl" fontWeight="bold">
            321
          </Text>
          <Divider w="full" />
          <Text textAlign="right" fontSize="sm">
            Hari ini naik ↑ 10 dari hari kemarin
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default InfoCard;
