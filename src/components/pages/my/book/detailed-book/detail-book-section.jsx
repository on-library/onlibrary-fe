import { GridItem, SimpleGrid, Text } from "@chakra-ui/layout";

const DetailBookSection = () => {
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
          <Text>Stock</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Genre
          </Text>
          <Text>Stock</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Author
          </Text>
          <Text>Stock</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Kategori
          </Text>
          <Text>Stock</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Tahun Terbit
          </Text>
          <Text>Stock</Text>
        </GridItem>
        <GridItem>
          <Text fontWeight="semibold" textColor="gray.400">
            Penerbit
          </Text>
          <Text>Stock</Text>
        </GridItem>
      </SimpleGrid>
    </>
  );
};


export default DetailBookSection;
