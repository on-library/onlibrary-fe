import { StarIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";

const ItemReviewBook = ({ data }) => {
  return (
    <Box display="flex" experimental_spaceX={6}>
      <Image src={"https://ui-avatars.com/api/?name=" + data.user.name} />
      <Box>
        <Text>{data.user.name}</Text>

        <Box my={2} display="flex" experimental_spaceX={1}>
          {data.rating
            ? [...new Array(data.rating)].map(() => (
                <StarIcon color="yellow.400" />
              ))
            : "-"}
        </Box>
        <Text>{data.comment || "-"}</Text>
      </Box>
    </Box>
  );
};

export default ItemReviewBook;
