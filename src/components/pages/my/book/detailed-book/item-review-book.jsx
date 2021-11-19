import { Box, Text } from "@chakra-ui/layout";

const ItemReviewBook = () => {
  return (
    <Box display="flex" experimental_spaceX={6}>
      <Box>Image</Box>
      <Box>
        <Text>[nama reviewer]</Text>
        <Text>[nama reviewer]</Text>
        <Text>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium
          itaque distinctio temporibus assumenda, repellat quasi corrupti
          quisquam tenetur est natus! Cumque accusamus asperiores ratione minus
          ut nemo nulla dolore quod!
        </Text>
      </Box>
    </Box>
  );
};

export default ItemReviewBook;
