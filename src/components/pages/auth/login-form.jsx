import React from "react";
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

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
                    {...register("Username", { required: true, maxLength: 80 })}
                  />
                </InputGroup>
              </FormControl>
              <FormControl isRequired>
                <InputGroup>
                  <Input
                    id="passwordLogin"
                    type="password"
                    placeholder="Password"
                    {...register("Password", { required: true })}
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
                isLoading={isSubmitting}
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
