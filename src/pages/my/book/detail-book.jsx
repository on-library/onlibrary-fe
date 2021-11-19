import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/react";
import {
  Box,
  Divider,
  Grid,
  GridItem,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/layout";
import LayoutMy from "../../../components/layouts/my/layout-my";
import ItemReviewBook from "../../../components/pages/my/book/detailed-book/item-review-book";
import SynopsisBook from "../../../components/pages/my/book/detailed-book/synopsis-book";
import DetailBookSection from "../../../components/pages/my/book/detailed-book/detail-book-section";
import MainDetailBook from "../../../components/pages/my/book/detailed-book/main-detail-book";

const DetailBook = () => {
  //TODO: Query book use react-query
  // const queryBook

  return (
    <LayoutMy>
      <SimpleGrid columns={[12]} gap={12}>
        <GridItem colSpan={[12, 12, 12, 10]}>
          <MainDetailBook />
        </GridItem>
        <GridItem colSpan={[12, 12, 12, 2]} height={{ lg: "168px" }}>
          <Box
            width="full"
            display="flex"
            justifyContent="end"
            alignItems="end"
            h="full"
          >
            <Button colorScheme="pink" width={{ base: "100%", lg: "200px" }}>
              Pinjam
            </Button>
          </Box>
        </GridItem>
        <GridItem colSpan={[12, 12, 12, 6]}>
          <SynopsisBook />
        </GridItem>
        <GridItem colSpan={[12, 12, 6]}>
          <DetailBookSection />
        </GridItem>
        <GridItem colSpan={12}>
          <Divider />
        </GridItem>
        <GridItem colSpan={12}>
          <Text fontSize="xl" fontWeight="semibold">
            Ulasan Buku
          </Text>
          <Box display="flex" flexDir="column" experimental_spaceY={6} mt={2}>
            <ItemReviewBook />
            <ItemReviewBook />
            <ItemReviewBook />
            <ItemReviewBook />
          </Box>
        </GridItem>
      </SimpleGrid>
    </LayoutMy>
  );
};

export default DetailBook;
