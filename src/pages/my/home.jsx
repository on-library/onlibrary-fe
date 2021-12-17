import { Box, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import LayoutMy from "../../components/layouts/my/layout-my";
import CardMenu from "../../components/pages/my/home/card-menu";
import { getBook } from "../../modules/book/api";
import { useQuery } from "react-query";
import ListBook from "../../components/pages/my/book/list-book";
import { Input, InputGroup, InputRightAddon } from "@chakra-ui/input";
import { SearchIcon } from "@chakra-ui/icons";
import { Button } from "@chakra-ui/button";
import { useForm } from "react-hook-form";

const Home = () => {
  const listBookQuery = useQuery(["book"], () => getBook());

  const navigate = useNavigate();

  const form = useForm();

  const onSubmit = (data) => {
    navigate("/my/book?search=" + data.book);
  };

  return (
    <LayoutMy>
      <Heading>Daftar Buku</Heading>
      <Box mt={4} mb={8}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <Text mb={1} fontWeight="medium">
            Cari buku
          </Text>
          <InputGroup>
            <Input
              placeholder="Masukkan judul buku"
              {...form.register("book", { required: true })}
              isInvalid={!!form.formState.errors.book}
            />
            <InputRightAddon
              as="button"
              type="submit"
              cursor="pointer"
              bg="white"
              children={<SearchIcon />}
            />
          </InputGroup>
        </form>
      </Box>
      {listBookQuery.isLoading ? (
        "Loading..."
      ) : (
        <ListBook listBookQuery={listBookQuery} />
      )}
    </LayoutMy>
  );
};

export default Home;
