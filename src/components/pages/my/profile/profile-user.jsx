import React from "react";
import { useForm } from "react-hook-form";
import { Box, Flex, Heading, Stack, Divider } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";

const EditProfileUser = () => {
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
            <FormControl>
              <Stack direction="column" spacing={2}>
                <FormLabel Width="400px">Nama Pengguna</FormLabel>
                <Input
                  id="namaProfil"
                  placeholder="nama"
                  {...register("Nama", {
                    required: true,
                    maxLength: 80,
                  })}
                />
                <FormLabel Width="400px">No. HP</FormLabel>
                <Input
                  id="phoneProfil"
                  type="tel"
                  placeholder="No. HP"
                  {...register("phone", { required: true, maxLength: 100 })}
                />
                <FormLabel Width="400px">Email</FormLabel>
                <Input
                  id="emailProfil"
                  placeholder="Email"
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i,
                  })}
                />
                <FormLabel minWidth="400px">Alamat</FormLabel>
                <Input
                  id="alamatProfil"
                  placeholder="Alamat"
                  {...register("alamat", { required: true, maxLength: 100 })}
                />
              </Stack>
            </FormControl>

            <Button
              borderRadius={4}
              type="submit"
              colorScheme="blue"
              isLoading={isSubmitting}
            >
              Sunting Profil
            </Button>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default EditProfileUser;
