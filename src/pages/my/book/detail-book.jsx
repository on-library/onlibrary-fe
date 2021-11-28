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
import { useLocation } from "react-router";
import { useMutation, useQuery } from "react-query";
import { getDetailBook } from "../../../modules/book/api";
import { addRent } from "../../../modules/rent/api";
import RentSuccessModal from "../../../components/pages/my/book/detailed-book/rent-success-modal";
import { useState } from "react";

const DetailBook = () => {
  const { pathname } = useLocation();
  const [isOpen, setIsOpen] = useState();
  const [dataBuku, setDataBuku] = useState();
  const idBook = pathname.split("/")[3];

  const queryBook = useQuery(["book", idBook], () => getDetailBook(idBook), {
    enabled: !!idBook,
  });

  const mutation = useMutation(() => addRent({ book_id: idBook }), {
    onSuccess: (data) => {
      setIsOpen(true);
      setDataBuku(data);
    },
  });

  const onSubmit = () => {
    mutation.mutate();
  };

  return (
    <LayoutMy>
      <RentSuccessModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dataModal={dataBuku}
      />
      {queryBook.isLoading ? (
        "loading..."
      ) : (
        <SimpleGrid columns={[12]} gap={12}>
          <GridItem colSpan={[12, 12, 12, 10]}>
            <MainDetailBook queryBook={queryBook} />
          </GridItem>
          <GridItem colSpan={[12, 12, 12, 2]} height={{ lg: "168px" }}>
            <Box
              width="full"
              display="flex"
              justifyContent="end"
              alignItems="end"
              h="full"
            >
              <Button
                colorScheme="purple"
                width={{ base: "100%", lg: "200px" }}
                onClick={() => onSubmit()}
              >
                Pinjam
              </Button>
            </Box>
          </GridItem>
          <GridItem colSpan={[12, 12, 12, 6]}>
            <SynopsisBook queryBook={queryBook} />
          </GridItem>
          <GridItem colSpan={[12, 12, 6]}>
            <DetailBookSection queryBook={queryBook} />
          </GridItem>
          <GridItem colSpan={12}>
            <Divider />
          </GridItem>
          <GridItem colSpan={12}>
            <Text fontSize="xl" fontWeight="semibold">
              Ulasan Buku
            </Text>
            <Box display="flex" flexDir="column" experimental_spaceY={6} mt={2}>
              {queryBook.data?.data.reviews.map((item) => (
                <ItemReviewBook data={item} />
              ))}
            </Box>
          </GridItem>
        </SimpleGrid>
      )}
    </LayoutMy>
  );
};

export default DetailBook;
