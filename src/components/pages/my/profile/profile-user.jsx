import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Box, Flex, Heading, Stack, Divider, Spacer } from "@chakra-ui/layout";
import { FormControl, FormLabel } from "@chakra-ui/form-control";
import { Input, InputGroup } from "@chakra-ui/input";
import { Button } from "@chakra-ui/button";
import { useNavigate } from "react-router";
import { useQuery, useMutation } from "react-query";
import { editProfile, getProfile } from "../../../../modules/auth/api";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { Fade } from "@chakra-ui/transition";

const EditProfileUser = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm();

  const queryProfile = useQuery(
    ["profile", localStorage.getItem("token")],
    () => getProfile(),
    {
      onSuccess: (data) => {
        const userProfile = data.user;
        setValue("name", userProfile.name);
        setValue("email", userProfile.email);
        setValue("address", userProfile.address);
        setValue("nim", userProfile.nim);
        setValue("username", userProfile.username);
      },
    }
  );

  const mutation = useMutation((data) => editProfile(data), {
    onSuccess: () => {
      queryProfile.refetch();
      setSuccess(true);
    },
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 2000);
  }, [success]);

  if (queryProfile.isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Flex
      flexDirection="column"
      // backgroundColor="gray.200"
      justifyContent="center"
      alignItems="center"
    >
      <Stack direction="column" spacing={4} alignItems="center">
        <Heading>DATA PROFIL</Heading>
        {!!errors.name || !!errors.address ? (
          <Alert status="error">
            <AlertIcon />
            Harap isi semua kolom yang ada
          </Alert>
        ) : (
          ""
        )}

        <Fade
          in={success}
          style={{
            width: "100%",
          }}
        >
          <Alert status="success">
            <AlertIcon />
            Akun berhasil diubah
          </Alert>
        </Fade>

        <Divider borderColor="gray.600" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack direction="column" spacing={8} p="1rem">
            <Stack direction="column" spacing={2} minWidth="400px">
              <FormLabel>Nama Lengkap</FormLabel>
              <Input
                placeholder="Nama"
                {...register("name", {
                  required: true,
                  maxLength: 80,
                })}
                isInvalid={!!errors.name}
              />
              <FormLabel>NIM</FormLabel>
              <Input disabled placeholder="NIM" {...register("nim")} />
              <FormLabel>Username</FormLabel>
              <Input
                disabled
                placeholder="Username"
                {...register("username")}
              />
              <FormLabel>Email</FormLabel>
              <Input
                disabled
                placeholder="Email"
                {...register("email", {
                  required: true,
                })}
              />
              <FormLabel>Alamat</FormLabel>
              <Input
                placeholder="Alamat"
                {...register("address", { required: true, minLength: 6 })}
                isInvalid={!!errors.address}
              />
            </Stack>
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
                isLoading={mutation.isLoading}
              >
                Simpan
              </Button>
            </Stack>
          </Stack>
        </form>
      </Stack>
    </Flex>
  );
};

export default EditProfileUser;
