import { Button } from "@chakra-ui/button";
import { CheckIcon, CloseIcon, DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Badge, Box } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import { useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { deleteBook } from "../../../../modules/book/api";
import { Table } from "../../../ui";

const MemberTable = ({ memberQuery }) => {
  useEffect(() => {}, [memberQuery]);

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: (data, id) => {
          return (
            <Box display="flex" justifyContent="center">
              {id + 1}
            </Box>
          );
        },
      },
      {
        Header: "Username",
        accessor: "username",
      },
      {
        Header: "Nama",
        accessor: "name",
      },
      {
        Header: "Email",
        accessor: "email",
      },
      {
        Header: "Alamat",
        accessor: "address",
      },
      {
        Header: "Status Verifikasi",
        accessor: (data) => {
          return (
            <Box display="flex" flexDir="wrap" justifyContent="center">
              {data.is_verify == 1 ? (
                <Badge colorScheme="green" borderRadius="full">
                  <CheckIcon />
                </Badge>
              ) : (
                <Badge colorScheme="red" borderRadius="full">
                  <CloseIcon />
                </Badge>
              )}
            </Box>
          );
        },
      },
    ],
    []
  );

  const data = memberQuery.data?.data?.filter((item) => item?.role != 2);
  console.log(data);
  return (
    <>
      {/* <BookEditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dataModal={dataModal}
      /> */}
      <Table data={data} columns={columns} />
    </>
  );
};

export default MemberTable;
