import { Image } from "@chakra-ui/image";
import { Box, Heading } from "@chakra-ui/layout";

const MainDetailBook = () => {
  return (
    <Box
      display="flex"
      flexDir={{ base: "column", lg: "row" }}
      experimental_spaceX={{ lg: "6" }}
      experimental_spaceY={{ base: "6", lg: "0" }}
    >
      <Image
        src="gibbresh.png"
        fallbackSrc="https://via.placeholder.com/240x168"
      />
      <Box>
        <Heading>Dune</Heading>
      </Box>
    </Box>
  );
};

export default MainDetailBook;
