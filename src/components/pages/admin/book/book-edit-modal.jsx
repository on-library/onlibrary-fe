import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
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

  return (
    <Modal
      title={`Edit Buku ${dataModal.idRow + 1}`}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <form>
          <Box display="flex" flexDir="column" experimental_spaceY={2}>
            <Box>
              <Text mb={2}>Judul Buku</Text>
              <Input {...editForm.register("judul_buku")} />
            </Box>
            <Box>
              <Text mb={2}>Penulis Buku</Text>
              <Input {...editForm.register("penulis")} />
            </Box>
            <Box>
              <Text mb={2}>Penerbit Buku</Text>
              <Input {...editForm.register("penerbit")} />
            </Box>
            <Box>
              <Text mb={2}>Tahun Terbit</Text>
              <Input type="date" {...editForm.register("tahun_terbit")} />
            </Box>
            <Box>
              <Text mb={2}>Genre</Text>
              <Input />
            </Box>
            <Box>
              <Text mb={2}>Tahun Terbit</Text>
              <Input type="date" {...editForm.register("penerbit_buku")} />
            </Box>
            <Box>
              <Text mb={2}>Deskripsi Buku</Text>
              <Textarea rows="8" {...editForm.register("deskripsi_buku")} />
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
          <Button colorScheme="blue">Edit Buku</Button>
        </Box>
      }
    />
  );
};

export default BookEditModal;
