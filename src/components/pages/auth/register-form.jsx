import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Flex, Heading, Input, Button, Stack, Box } from "@chakra-ui/react";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { useMutation } from "react-query";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const [error, setError] = useState("");

  const onSubmit = (data) => console.log(data);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");

  //   if (token) {
  //     navigate("/my");
  //   }
  // });

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
                  {...register("nama", {
                    required: true,
                    minLength: 6,
                  })}
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
                />
                <FormLabel mt={2}>Tanggal Lahir</FormLabel>
                <Input
                  type="datetime-local"
                  placeholder="TTL"
                  {...register("ttl", {
                    required: true,
                    minLength: 6,
                  })}
                />
                <FormLabel mt={2}>Alamat</FormLabel>
                <Input
                  placeholder="Alamat"
                  {...register("alamat", {
                    required: true,
                    minLength: 6,
                  })}
                />
                <FormLabel mt={2}>Asal</FormLabel>
                <Input
                  placeholder="Asal"
                  {...register("asal", {
                    required: true,
                    minLength: 6,
                  })}
                />
                <FormLabel mt={2}>Username</FormLabel>
                <Input
                  placeholder="Username (alphanumeric)"
                  {...register("username", {
                    required: true,
                    minLength: 6,
                    pattern: /^[a-z0-9]+$/i,
                  })}
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
                />
              </FormControl>
              <Stack direction="row">
                <Button
                  borderRadius={4}
                  // type="submit"
                  variant="outline"
                  colorScheme="blue"
                  width="full"
                  onClick={() => navigate(-1)}
                >
                  Kembali
                </Button>
                <Button
                  borderRadius={4}
                  type="submit"
                  colorScheme="blue"
                  width="full"
                  // onClick={() => navigate("/auth/login")}
                >
                  Selanjutnya
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
