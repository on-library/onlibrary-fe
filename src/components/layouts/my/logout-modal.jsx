import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";
import { Modal } from "../../ui";

const LogoutModal = ({ isOpen, onClose }) => {
  const navigate = useNavigate();
  const onSubmit = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("guard_role");
    navigate("/auth/login");
  };

  return (
    <Modal
      title={``}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <Box>
          <Box>
            {/* <Text fontWeight="semibold" fontSize="2xl" textAlign="center">
              Beri Review
            </Text> */}
            <Box
              my={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            ></Box>
            <Text fontSize="2xl" fontWeight="semibold" textAlign="center">
              Apakah anda yakin ingin keluar?
            </Text>
          </Box>
        </Box>
      }
      modalFooter={
        <Box display="flex" experimental_spaceX={2}>
          <Button variant="ghost" onClick={onClose}>
            Tidak
          </Button>
          <Button colorScheme="red" onClick={() => onSubmit()}>
            Ya
          </Button>
        </Box>
      }
    />
  );
};

export default LogoutModal;
