import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Image, Badge } from "@chakra-ui/react";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { BASE_URL } from "../../../../constants/endpoint";
import { editBook } from "../../../../modules/book/api";
import { Modal } from "../../../ui";

const BookEditModal = ({ isOpen, onClose, dataModal }) => {
  const editForm = useForm({
    defaultValues: {
      judul_buku: dataModal.title,
    },
  });

  useEffect(() => {
    editForm.setValue("judul_buku", dataModal.judul_buku);
    editForm.setValue("penulis", dataModal.penulis);
    editForm.setValue("penerbit", dataModal.penerbit);
    editForm.setValue("stok", dataModal.stok);
    editForm.setValue("deskripsi_buku", dataModal.deskripsi_buku);
  }, [dataModal]);

  const mutation = useMutation(
    (data) =>
      editBook({ book_id: dataModal.id, deskripsi_buku: data.deskripsi_buku }),
    {
      onSuccess: () => {
        onClose();
      },
    }
  );

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
    <Modal
      title={`Edit Buku ${dataModal.idRow + 1}`}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <form>
          <Box display="flex" flexDir="column" experimental_spaceY={2}>
            <Box>
              <Image
                display="flex"
                mx="auto"
                width="200px"
                height={"240px"}
                src={`${BASE_URL + dataModal.img_url}`}
                fallbackSrc="https://via.placeholder.com/150x200"
              />
            </Box>
            <Box>
              <Text mb={2}>Judul Buku</Text>
              <Input {...editForm.register("judul_buku")} disabled />
            </Box>
            <Box>
              <Text mb={2}>Penulis Buku</Text>
              <Input {...editForm.register("penulis")} disabled />
            </Box>
            <Box>
              <Text mb={2}>Penerbit Buku</Text>
              <Input {...editForm.register("penerbit")} disabled />
            </Box>
            <Box>
              <Text mb={2}>Tahun Terbit</Text>
              <Input
                type="date"
                {...editForm.register("tahun_terbit")}
                disabled
              />
            </Box>
            <Box>
              <Text mb={2}>Genre</Text>
              <Box display="flex" experimental_spaceX={2}>
                {dataModal.genres?.length > 0 &&
                  dataModal.genres.map((item) => <Badge>{item.nama}</Badge>)}
              </Box>
              {/* <Input /> */}
            </Box>
            <Box>
              <Text mb={2}>Tahun Terbit</Text>
              <Input
                type="date"
                {...editForm.register("penerbit_buku")}
                disabled
              />
            </Box>
            <Box>
              <Text mb={2}>Deskripsi Buku</Text>
              <Textarea
                rows="8"
                {...editForm.register("deskripsi_buku", {
                  required: "*Required input",
                })}
              />
              {!!editForm.formState.errors.deskripsi_buku && (
                <Text textColor="red.500">
                  {editForm.formState.errors.deskripsi_buku.message}
                </Text>
              )}
            </Box>
          </Box>
        </form>
      }
      modalFooter={
        <Box>
          {" "}
          <Button variant="ghost" mr={3} onClick={onClose}>
            Close
          </Button>
          <Button colorScheme="blue" onClick={editForm.handleSubmit(onSubmit)}>
            Edit Buku
          </Button>
        </Box>
      }
    />
  );
};

export default BookEditModal;
