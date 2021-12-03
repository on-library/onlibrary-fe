import { useNavigate } from "react-router";
import { useForm } from "react-hook-form";
import { Flex, Heading, Input, Button, Stack, Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { useMutation } from "react-query";
import { postRegister } from "../../../modules/auth/api";
import sendDateFormat from "../../../utils/send-date-format";

const RegisterForm = () => {
  const navigate = useNavigate();

  const mutation = useMutation((data) => postRegister(data), {
    onSuccess: () => {
      navigate("/auth/register/success");
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) =>
    mutation.mutate({
      ...data,
      tanggal_lahir: sendDateFormat(data.tanggal_lahir),
    });

  return (
    <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        direction="column"
        spacing={6}
        justifyContent="center"
        alignItems="center"
      >
        <Heading>Registrasi Akun</Heading>
        {mutation.error ? (
          <Alert status="error">
            <AlertIcon />
            {mutation.error.response.data.message}
          </Alert>
        ) : (
          ""
        )}
        <Box minW={{ base: "90%", md: "600px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              direction="column"
              spacing={4}
              p="1rem"
              backgroundColor="white"
              boxShadow="md"
            >
              <FormControl isRequired>
                <FormLabel>Nama Pengguna</FormLabel>
                <Input
                  placeholder="Nama"
                  {...register("name", {
                    required: true,
                    minLength: 6,
                  })}
                  isInvalid={!!errors.name}
                />
                <FormLabel mt={2}>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    minLength: 6,
                    pattern: /^\S+@\S+$/i,
                  })}
                  isInvalid={!!errors.email}
                />
                <FormLabel mt={2}>NIM</FormLabel>
                <Input
                  type="number"
                  placeholder="NIM"
                  {...register("nim", {
                    required: true,
                    minLength: 15,
                    maxLength: 15,
                  })}
                  isInvalid={!!errors.nim}
                />
                <FormLabel mt={2}>Tanggal Lahir</FormLabel>
                <Input
                  type="date"
                  placeholder="TTL"
                  {...register("tanggal_lahir", {
                    required: true,
                    minLength: 6,
                  })}
                  isInvalid={!!errors.tanggal_lahir}
                />
                <FormLabel mt={2}>Alamat</FormLabel>
                <Input
                  placeholder="Alamat"
                  {...register("address", {
                    required: true,
                    minLength: 6,
                  })}
                  isInvalid={!!errors.address}
                />
                <FormLabel mt={2}>Username</FormLabel>
                <Input
                  placeholder="Username (alphanumeric)"
                  {...register("username", {
                    required: true,
                    minLength: 6,
                    pattern: /^[a-z0-9]+$/i,
                  })}
                  isInvalid={!!errors.username}
                />
                <FormLabel mt={2}>Password</FormLabel>
                <Input
                  type="password"
                  placeholder="Password (alphanumeric)"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    pattern: /^[a-z0-9]+$/i,
                  })}
                  isInvalid={!!errors.password}
                />
              </FormControl>
              <Stack direction="row">
                <Button
                  borderRadius={4}
                  // type="submit"
                  variant="outline"
                  colorScheme="blue"
                  width="full"
                  onClick={() => navigate("/auth/login")}
                >
                  Kembali
                </Button>
                <Button
                  isLoading={mutation.isLoading}
                  type="submit"
                  borderRadius={4}
                  type="submit"
                  colorScheme="blue"
                  width="full"
                  // onClick={() => navigate("/auth/login")}
                >
                  Daftarkan diri
                </Button>
              </Stack>
            </Stack>
          </form>
        </Box>
      </Stack>
    </Flex>
  );
};

export default RegisterForm;
