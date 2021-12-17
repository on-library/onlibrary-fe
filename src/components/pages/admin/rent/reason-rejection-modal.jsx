import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../../../ui";

const ReasonRejectionModal = ({
  isOpen,
  onClose,
  onSubmitMutationExtendDecline,
}) => {
  const [reasonText, setReasonText] = useState("");

  return (
    <Modal
      title={`Alasan Penolakan`}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <Box>
          <Text>Isi penolakan</Text>
          <Textarea
            onChange={(e) => {
              setReasonText(e.target.value);
            }}
          />
        </Box>
      }
      modalFooter={
        <Box>
          {" "}
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
          <Button
            colorScheme="red"
            onClick={() =>
              onSubmitMutationExtendDecline({
                alasan_penolakan_perpanjangan: reasonText,
              })
            }
          >
            Tolak
          </Button>
        </Box>
      }
    />
  );
};

export default ReasonRejectionModal;
