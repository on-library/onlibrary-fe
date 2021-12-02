import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Modal } from "../../../ui";

const ExtendRequestModal = ({ isOpen, onClose, dataModal, mutationExtend }) => {
  const editForm = useForm({});

  const onSubmit = (data) => {
    mutationExtend.mutate({
      alasan_perpanjangan: editForm.getValues("alasan_perpanjangan"),
      rent_id: dataModal?.pinjam_id,
    });
    editForm.reset();
  };

  return (
    <Modal
      title={`Minta perpanjangan ID ${dataModal?.pinjam_id}`}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <form>
          <Box display="flex" flexDir="column" experimental_spaceY={2}>
            <Box>
              <Text mb={2}>Alasan Perpanjangan</Text>
              <Textarea
                rows="8"
                {...editForm.register("alasan_perpanjangan", {
                  required: "Harap isi kolom alasan perpanjangan",
                })}
              />
              {!!editForm.formState.errors.alasan_perpanjangan ? (
                <Text fontSize="sm">
                  {editForm.formState.errors.alasan_perpanjangan.message}
                </Text>
              ) : (
                ""
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
          <Button onClick={() => onSubmit()} colorScheme="purple">
            Minta Perpanjangan
          </Button>
        </Box>
      }
    />
  );
};

export default ExtendRequestModal;
