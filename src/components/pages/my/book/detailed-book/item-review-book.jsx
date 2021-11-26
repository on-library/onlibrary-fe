import { Box, Text } from "@chakra-ui/layout";

const ItemReviewBook = ({ data }) => {
  return (
    <Box display="flex" experimental_spaceX={6}>
      <Box>Image</Box>
      <Box>
        <Text>[nama reviewer]</Text>
        <Text>{data.rating | "-"}</Text>
        <Text>{data.comment}</Text>
      </Box>
    </Box>
  );
};

export default ItemReviewBook;
