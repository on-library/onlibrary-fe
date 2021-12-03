import { Button } from "@chakra-ui/button";
import { CheckCircleIcon, CheckIcon } from "@chakra-ui/icons";
import { Box, Heading, Text } from "@chakra-ui/layout";
import { useNavigate } from "react-router";

const RegisterSuccess = () => {
  const navigate = useNavigate();
  return (
    <Box
      backgroundColor="gray.200"
      h="100vh"
      w="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box bg="white" w="500px" p="1rem" shadow="sm" rounded="md">
        <Box display="flex" justifyContent="center">
          <CheckCircleIcon color="green.500" fontSize="64pt" />
        </Box>
        <Box>
          <Heading fontSize="2xl" mt="3" textAlign="center">
            Register berhasil
          </Heading>
          <Text textAlign="center" mt="1">
            Registrasi berhasil dilakukan. Untuk verifikasi akun, silahkan cek
            email anda
          </Text>
          <Button
            mt={2}
            variant="outline"
            colorScheme="blue"
            width="full"
            onClick={() => navigate("/auth/login")}
          >
            Kembali ke login
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RegisterSuccess;
