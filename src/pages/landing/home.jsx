import { Box, GridItem, Heading, SimpleGrid, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import LayoutMy from "../../components/layouts/my/layout-my";
import CardMenu from "../../components/pages/my/home/card-menu";
import { getBook } from "../../modules/book/api";
import { useQuery } from "react-query";
import ListBook from "../../components/pages/my/book/list-book";

const Home = () => {
  const navigate = useNavigate();

  const listBookQuery = useQuery(["book"], () => getBook());
  // const logout = () => {
  //   localStorage.removeItem("token");
  //   localStorage.removeItem("guard_role");
  //   navigate("/auth/login");
  // };

  return (
    <LayoutMy>
      <Heading>Daftar Buku</Heading>
      <Text>Hasil Pencarian:</Text>
      {listBookQuery.isLoading ? (
        "Loading..."
      ) : (
        <ListBook listBookQuery={listBookQuery} />
      )}
      {/* <SimpleGrid columns={[1, 1, 1, 4]} gap={6} mt={4}>
        <GridItem w="full">
          <CardMenu title="Cari Buku" onClick={() => navigate("/my/book")} />
        </GridItem>
        <GridItem>
          <CardMenu
            title="Status Peminjaman"
            onClick={() => navigate("/my/rent")}
          />
        </GridItem>
        <GridItem>
          <CardMenu title="Profile" onClick={() => navigate("/my/profile")} />
        </GridItem>
        <GridItem>
          <CardMenu title="Logout" onClick={() => logout()} />
        </GridItem>
      </SimpleGrid> */}
    </LayoutMy>
  );
};

export default Home;
