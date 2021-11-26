import { Box } from "@chakra-ui/layout";
import ItemBook from "./item-book";

const ListBook = ({ listBookQuery }) => {
  return (
    <Box mt={6} display="flex" flexDir="column" experimental_spaceY={8}>
      {listBookQuery.data?.data.map((item) => (
        <ItemBook data={item} />
      ))}
    </Box>
  );
};

export default ListBook;
