import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import genreOptions from "../../../../data/genre-options";
import { addBook } from "../../../../modules/book/api";
import { getCategories } from "../../../../modules/category/api";
import sendDateFormat from "../../../../utils/send-date-format";
import Select from "../../../ui/select";

const BookAddForm = ({ bookAddForm }) => {
  const navigate = useNavigate();

  const categoryList = useQuery(["categories"], () => getCategories());

  const mutation = useMutation(
    (data) =>
      addBook({
        ...data,
        stok: +data.stok,
        tahun_terbit: sendDateFormat(data.tahun_terbit),
      }),
    {
      onSuccess: () => {
        navigate("/admin/book");
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  if (categoryList.isLoading) {
    return <Box>Loading...</Box>;
  }

  return (
    <Box>
      <form onSubmit={bookAddForm.handleSubmit(onSubmit)}>
        <SimpleGrid mt={10} columns={2} gap={6}>
          <GridItem colSpan={[2, 2, 2, 1]}>
            <Box>
              <Text fontWeight="semibold">Nama Buku *</Text>
              <Input
                mt={1}
                {...bookAddForm.register("judul_buku", {
                  required: "Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.judul_buku}
              />
              <Text
                fontSize="sm"
                mt={1}
                textColor="red.500"
                fontWeight="medium"
              >
                {bookAddForm.formState.errors.judul_buku
                  ? bookAddForm.formState.errors?.judul_buku.message
                  : ""}
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 2, 1]}>
            <Box>
              <Text fontWeight="semibold">Penulis Buku</Text>
              <Input
                mt={1}
                {...bookAddForm.register("penulis", {
                  required: "Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.penulis}
              />
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 2, 1]}>
            <Box>
              <Text fontWeight="semibold">Penerbit Buku</Text>
              <Input
                mt={1}
                {...bookAddForm.register("penerbit", {
                  required: "Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.penerbit}
              />
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]}>
            <Box>
              <Text fontWeight="semibold">Tahun Terbit</Text>
              <Input
                type="date"
                mt={1}
                {...bookAddForm.register("tahun_terbit")}
              />
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]}>
            <Box>
              <Text fontWeight="semibold">Genre</Text>
              <Select
                isMulti={true}
                options={genreOptions}
                {...bookAddForm.register("genre")}
                onChange={(data) =>
                  bookAddForm.setValue(
                    "genres",
                    data.map((item) => item.value)
                  )
                }
              />
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]}>
            <Box>
              <Text fontWeight="semibold">Kategori</Text>
              <Select
                options={categoryList.data.data.map((item) => {
                  return { value: item.category_id, label: item.nama };
                })}
                onChange={(data) =>
                  bookAddForm.setValue("category_id", data.value)
                }
              />
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box width="30%">
              <Text fontWeight="semibold">Stock *</Text>
              <Input
                type="number"
                mt={1}
                {...bookAddForm.register("stok", {
                  required: "Required Input",
                })}
                isInvalid={!!bookAddForm.formState.errors.stok}
              />
              <Text
                fontSize="sm"
                mt={1}
                textColor="red.500"
                fontWeight="medium"
              >
                {bookAddForm.formState.errors.stok
                  ? bookAddForm.formState.errors?.stok.message
                  : ""}
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Divider />
          </GridItem>

          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="semibold">Upload gambar</Text>
              <Input type="file" py="auto" borderWidth="0px" mt="2" />
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="semibold">Deskripsi Buku</Text>
              <Textarea
                mt={1}
                {...bookAddForm.register("deskripsi_buku", {
                  required: "Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.deskripsi_buku}
              />
            </Box>
          </GridItem>
        </SimpleGrid>

        <Box my={10} justifyContent="center" display="flex">
          <Button type="submit" colorScheme="green" h="44px" width="260px">
            Tambahkan Buku
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default BookAddForm;
