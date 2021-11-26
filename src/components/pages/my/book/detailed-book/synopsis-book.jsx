import { Text } from "@chakra-ui/layout";

const SynopsisBook = ({ queryBook }) => {
  return (
    <>
      <Text fontSize="xl" fontWeight="semibold">
        Sinopsis Buku
      </Text>
      <Text mt={2}>{queryBook.data?.data.deskripsi_buku || "-"}</Text>
    </>
  );
};

export default SynopsisBook;
