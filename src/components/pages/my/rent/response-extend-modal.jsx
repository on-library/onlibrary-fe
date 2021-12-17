import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { Modal } from "../../../ui";

const ResponseExtendModal = ({
  isOpen,
  onClose,
  dataModal,
  mutationExtend,
}) => {
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
      title={`Info dari admin`}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <form>
          <Box display="flex" flexDir="column" experimental_spaceY={2}>
            <Box>
              <Text mb={2}>Alasan Penolakan</Text>
              <Text>{dataModal?.alasan_penolakan_perpanjangan}</Text>
            </Box>
          </Box>
        </form>
      }
      modalFooter={<Box> </Box>}
    />
  );
};

export default ResponseExtendModal;
