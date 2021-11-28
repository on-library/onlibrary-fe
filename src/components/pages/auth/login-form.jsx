import { useNavigate } from "react-router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  Box,
  Link,
  FormControl,
  FormHelperText,
  Divider,
} from "@chakra-ui/react";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { useMutation } from "react-query";
import { getProfile, login } from "../../../modules/auth/api";
import { useNavigate } from "react-router";


const LoginForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();


  const [error, setError] = useState("");

  const navigate = useNavigate();

  const mutation = useMutation((data) => login(data), {
    onSuccess: async (data) => {
      localStorage.setItem("token", data.token);
      const profile = await getProfile();
      localStorage.setItem("guard_role", profile.user.role);
      if (profile.user.role == 1) {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/my/";
      } else if (profile.user.role == 2) {
        // eslint-disable-next-line no-restricted-globals
        location.href = "/admin/";
      }
    },
    onError: (err) => {
      setError(err.response.data.message);
    },
  });

  const onSubmit = (data) => mutation.mutate(data);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/my");
    }
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
        <Heading>OnLibrary</Heading>
        {error ? (
          <Alert status="error">
            <AlertIcon />
            {error}
          </Alert>
        ) : (
          ""
        )}

        <Box minW={{ base: "90%", md: "400px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              direction="column"
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    id="usernameLogin"
                    placeholder="Username"
                    {...register("username", { required: true, maxLength: 80 })}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    id="passwordLogin"
                    type="password"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                </InputGroup>
                <FormHelperText textAlign="right">
                  <Link>Lupa password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={4}
                type="submit"
                colorScheme="blue"
                width="full"
                isLoading={mutation.isLoading}

              >
                Login
              </Button>
            </Stack>
          </form>

          <Divider borderColor="gray.200" />

          <Stack
            direction="column"
            spacing={4}
            p="1rem"
            backgroundColor="whiteAlpha.900"
            boxShadow="md"
          >
            <Button
              borderRadius={4}
              // type="submit"
              variant="outline"
              colorScheme="blue"
              width="full"
              onClick={() => navigate("/register")}
            >
              Register
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginForm;
