import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Divider, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router";
import genreOptions from "../../../../data/genre-options";
import { addBook } from "../../../../modules/book/api";
import { getCategories } from "../../../../modules/category/api";
import { blobToBase64 } from "../../../../utils/blob-to-base-64";
import sendDateFormat from "../../../../utils/send-date-format";
import Select from "../../../ui/select";

const BookAddForm = ({ bookAddForm }) => {
  const navigate = useNavigate();

  const categoryList = useQuery(["categories"], () => getCategories());

  const mutation = useMutation(
    async (data) => {
      let baseImageRaw = await blobToBase64(data.upload_image[0]);
      let baseImage = baseImageRaw.split(",")[1];
      return addBook({
        ...data,
        stok: +data.stok,
        tahun_terbit: sendDateFormat(data.tahun_terbit),
        image_base: baseImage,
      });
    },
    {
      onSuccess: () => {
        navigate("/admin/book");
      },
    }
  );

  const onSubmit = (data) => {
    // console.log(data);
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
                  required: "* Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.judul_buku}
              />
              <Text fontSize="sm" mt={1} textColor="red.500">
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
                  required: "* Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.penulis}
              />
              <Text fontSize="sm" mt={1} textColor="red.500">
                {bookAddForm.formState.errors.penulis
                  ? bookAddForm.formState.errors?.penulis.message
                  : ""}
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 2, 1]}>
            <Box>
              <Text fontWeight="semibold">Penerbit Buku</Text>
              <Input
                mt={1}
                {...bookAddForm.register("penerbit", {
                  required: "* Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.penerbit}
              />
              <Text fontSize="sm" mt={1} textColor="red.500">
                {bookAddForm.formState.errors.penerbit
                  ? bookAddForm.formState.errors?.penerbit.message
                  : ""}
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]}>
            <Box>
              <Text fontWeight="semibold">Tahun Terbit</Text>
              <Input
                type="date"
                mt={1}
                isInvalid={!!bookAddForm.formState.errors.tahun_terbit}
                {...bookAddForm.register("tahun_terbit", {
                  required: "* Required input",
                })}
              />
              <Text fontSize="sm" mt={1} textColor="red.500">
                {bookAddForm.formState.errors.tahun_terbit
                  ? bookAddForm.formState.errors?.tahun_terbit.message
                  : ""}
              </Text>
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]}>
            <Box>
              <Text fontWeight="semibold">Genre</Text>
              <Select
                isMulti={true}
                options={genreOptions}
                {...bookAddForm.register("genres", {
                  required: "* Required input",
                })}
                onChange={(data) =>
                  bookAddForm.setValue(
                    "genres",
                    data.map((item) => item.value)
                  )
                }
              />
              {!!bookAddForm.formState.errors.genres ? (
                <Text fontSize="sm" textColor="red.500">
                  {bookAddForm.formState.errors.genres.message}
                </Text>
              ) : (
                ""
              )}
            </Box>
          </GridItem>

          <GridItem colSpan={[2, 2, 1, 1]}>
            <Box>
              <Text fontWeight="semibold">Kategori</Text>
              <Select
                {...bookAddForm.register("category_id", {
                  required: "* Required Input",
                })}
                options={categoryList.data.data.map((item) => {
                  return { value: item.category_id, label: item.nama };
                })}
                onChange={(data) =>
                  bookAddForm.setValue("category_id", data.value)
                }
              />
              {!!bookAddForm.formState.errors.category_id ? (
                <Text fontSize="sm" textColor="red.500">
                  {bookAddForm.formState.errors.category_id.message}
                </Text>
              ) : (
                ""
              )}
            </Box>
          </GridItem>
          <GridItem colSpan={2}>
            <Box width="30%">
              <Text fontWeight="semibold">Stock *</Text>
              <Input
                type="number"
                mt={1}
                {...bookAddForm.register("stok", {
                  required: "* Required Input",
                })}
                isInvalid={!!bookAddForm.formState.errors.stok}
              />
              <Text fontSize="sm" mt={1} textColor="red.500">
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
              <Input
                {...bookAddForm.register("upload_image", {
                  required: "* required",
                })}
                type="file"
                accept="image/png"
                py="auto"
                borderWidth="0px"
                mt="2"
              />
            </Box>
          </GridItem>

          <GridItem colSpan={2}>
            <Box>
              <Text fontWeight="semibold">Deskripsi Buku</Text>
              <Textarea
                mt={1}
                rows={8}
                {...bookAddForm.register("deskripsi_buku", {
                  required: "* Required input",
                })}
                isInvalid={!!bookAddForm.formState.errors.deskripsi_buku}
              />
            </Box>
            <Text fontSize="sm" mt={1} textColor="red.500">
              {bookAddForm.formState.errors.deskripsi_buku
                ? bookAddForm.formState.errors?.deskripsi_buku.message
                : ""}
            </Text>
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
