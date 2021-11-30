import React from "react";
import { useForm } from "react-hook-form";
import { Box, Flex, Heading, Stack, Divider, Spacer } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router";

const EditProfileUser = () => {
  const navigate = useNavigate();

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
      // backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column" spacing={4} alignItems="center">
        <Heading>DATA PROFIL</Heading>
        <Divider borderColor="gray.600" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={8} p="1rem">
            <FormControl isRequired>
              <Stack direction="column" spacing={2} minWidth="400px">
                <FormLabel>Nama Pengguna</FormLabel>
                <Input
                  placeholder="Nama"
                  {...register("nama", {
                    required: true,
                    maxLength: 80,
                  })}
                />
                <FormLabel>Email</FormLabel>
                <Input
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <FormLabel>Alamat</FormLabel>
                <Input
                  placeholder="Alamat"
                  {...register("alamat", { required: true, minLength: 6 })}
                />
              </Stack>
            </FormControl>
            <Stack direction="row">
              <Button
                borderRadius={4}
                variant="outline"
                colorScheme="blue"
                onClick={() => navigate(-1)}
              >
                Kembali
              </Button>
              <Spacer />
              <Button
                borderRadius={4}
                type="submit"
                colorScheme="blue"
                isLoading={isSubmitting}
              >
                Sunting Profil
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default EditProfileUser;
