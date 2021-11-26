import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Text } from "@chakra-ui/layout";
import { useMemo, useState } from "react";
import { BsFillBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router";

const ItemBook = ({ data }) => {
  const textDscRaw = data.deskripsi_buku.split(" ");
  const [result, setResult] = useState("");

  const navigate = useNavigate();

  useMemo(() => {
    for (let i = 0; i < 40; i++) {
      setResult((r) => r + " " + textDscRaw[i]);
      if (i === textDscRaw.length - 1) {
        break;
      }
    }
  }, []);

  return (
    <Box display="flex" borderBottomWidth="1px" w="full" h="150px">
      <Box display="flex" experimental_spaceX={4} w="80%">
        <Image
          src="gibbresh.png"
          height="130px"
          fallbackSrc="https://via.placeholder.com/150x130"
        />
        <Box>
          <Text fontSize="2xl" fontWeight="semibold">
            {data.judul_buku}
          </Text>
          <Text>{result} ...</Text>
        </Box>{" "}
      </Box>
      <Box display="flex" experimental_spaceX={4}>
        <Button
          colorScheme="purple"
          onClick={() => navigate(`/my/book/${data.id}`)}
        >
          Lihat Buku
        </Button>
        <BsFillBookmarkFill size="2.2em" />
      </Box>
    </Box>
  );
};

export default ItemBook;
