import { Box, Text } from "@chakra-ui/layout";

const CardMenu = ({ onClick, title }) => {
  return (
    <Box
      w="full"
      borderWidth="1px"
      borderColor="gray.400"
      height={"240px"}
      borderRadius="md"
      cursor="pointer"
      display="flex"
      justifyContent="center"
      alignItems="center"
      onClick={onClick}
    >
      {" "}
      <Text textAlign="center" fontSize="2xl" fontWeight="semibold">
        {title}
      </Text>
    </Box>
  );
};

export default CardMenu;
