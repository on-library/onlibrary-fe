import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useMutation } from "react-query";
import { useNavigate } from "react-router";
import genreOptions from "../../../../data/genre-options";
import { addBook } from "../../../../modules/book/api";
import Select from "../../../ui/select";

const BookAddForm = ({ bookAddForm }) => {
  const navigate = useNavigate();

  const mutation = useMutation((data) => addBook(data), {
    onSuccess: () => {
      navigate("/admin/book");
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <Box w={{ lg: "60%" }}>
      <form onSubmit={bookAddForm.handleSubmit(onSubmit)}>
        <SimpleGrid mt={10} columns={[1, 1, 1]} gap={6}>
          <GridItem>
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
          <GridItem>
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
          <GridItem>
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
          <GridItem>
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
          <GridItem>
            <Box>
              <Text fontWeight="semibold">Tahun Terbit</Text>
              <Input
                type="date"
                mt={1}
                {...bookAddForm.register("tahun_terbit")}
              />
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold">Genre</Text>
              <Select
                isMulti={true}
                options={genreOptions}
                {...bookAddForm.register("genre")}
                onChange={(data) =>
                  bookAddForm.setValue(
                    "genre",
                    data.map((item) => item.value)
                  )
                }
              />
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold">Kategori</Text>
              <Select isMulti={true} options={genreOptions} />
            </Box>
          </GridItem>
          <GridItem>
            <Box>
              <Text fontWeight="semibold">Stok *</Text>
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
        </SimpleGrid>
        <GridItem>
          <Box my={10}>
            <Button type="submit" colorScheme="purple">
              Tambahkan Buku
            </Button>
          </Box>
        </GridItem>
      </form>
    </Box>
  );
};

export default BookAddForm;
