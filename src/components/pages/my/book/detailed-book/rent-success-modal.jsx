import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Modal } from "../../../../ui";

const RentSuccessModal = ({ isOpen, onClose, dataModal }) => {
  const navigate = useNavigate();
  return (
    <Modal
      title={``}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <Box>
          <Box>
            <Text fontWeight="semibold" fontSize="2xl" textAlign="center">
              Peminjaman berhasil dilakukan
            </Text>

            <Text fontSize="lg" textAlign="center">
              {/* {JSON.stringify(dataModal)} */}
              Peminjaman buku dengan ID:<b>
                {dataModal?.data?.book_rent_id}
              </b>{" "}
              berhasil dilakukan. Harap tunggu konfirmasi dari admin, untuk
              pengambilan buku.
            </Text>
            <Box textAlign="center" mt={6}>
              <Button colorScheme="purple" onClick={() => navigate("/my/rent")}>
                Lihat status peminjaman
              </Button>
            </Box>
          </Box>
        </Box>
      }
    />
  );
};

export default RentSuccessModal;
