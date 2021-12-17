import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Modal } from "../../../../ui";
import ReactStars from "react-rating-stars-component";
import { Textarea } from "@chakra-ui/textarea";

const BookEmptyModal = ({ isOpen, onClose }) => {
  return (
    <Modal
      title={``}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <Box>
          <Box>
            <Text fontWeight="semibold" fontSize="2xl" textAlign="center">
              Buku sedang kosong
            </Text>
          </Box>
        </Box>
      }
    />
  );
};

export default BookEmptyModal;
