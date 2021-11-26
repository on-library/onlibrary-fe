import { Badge, Box, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import dayjs from "dayjs";

const DetailBookSection = ({ queryBook }) => {
  return (
    <>
      <Text fontSize="xl" fontWeight="semibold">
        Detail Buku
      </Text>
      <SimpleGrid mt={2} columns={2} gap={6}>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Stock
          </Text>
          <Text>{queryBook.data?.data.stok || "-"}</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Genre
          </Text>
          <Box>
            {queryBook.data?.data.genres?.length > 0
              ? queryBook.data?.data.genres.map((item) => (
                  <Badge mr={2}>{item.nama || "-"}</Badge>
                ))
              : "-"}
          </Box>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Author
          </Text>
          <Text>{queryBook.data?.data.penulis || "-"}</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Kategori
          </Text>
          <Text>{queryBook.data?.data.category.nama || "-"}</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Tahun Terbit
          </Text>
          <Text>
            {dayjs(queryBook.data?.data.tahun_terbit).format("YYYY-MM-DD") ||
              "-"}
          </Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Penerbit
          </Text>
          <Text>{queryBook.data?.data.penerbit || "-"}</Text>
        </GridItem>
      </SimpleGrid>
    </>
  );
};

export default DetailBookSection;
