import { Button } from "@chakra-ui/button";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
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
import { Table } from "../../../ui";

const RentTable = ({ listBookQuery }) => {
  //   const [isOpen, setIsOpen] = useState(false);
  //   const [dataModal, setDataModal] = useState({});

  //   const mutationDelete = useMutation((data) => deleteBook(data), {
  //     onSuccess: () => {
  //       listBookQuery.refetch();
  //     },
  //   });

  useEffect(() => {}, [listBookQuery]);

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
        Header: "Status",
        accessor: () => {
          return <></>;
        }, // accessor is the "key" in the data
      },
      {
        Header: "Nama",
        accessor: "judul_buku",
      },
      {
        Header: "Judul Buku",
        accessor: "category.nama",
      },
      {
        Header: "Detail Info",
        accessor: "",
      },

      {
        Header: "Action",
        accessor: (data, id) => {
          return (
            <Box display="flex" experimental_spaceX={4}>
              <Button
                colorScheme="green"
                onClick={() => {
                  //   setIsOpen(true);
                  //   setDataModal({ ...data, idRow: id });
                }}
              >
                <EditIcon />
              </Button>
              <Popover>
                <PopoverTrigger>
                  <Button colorScheme="red">
                    <DeleteIcon />
                  </Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Konfirmasi hapus ID {id + 1}</PopoverHeader>
                  <PopoverBody>
                    Apakah anda yakin ingin menghapus data ini?
                    <Box mt={6} float="right">
                      {/* <Button
                        colorScheme="red"
                        isLoading={mutationDelete.isLoading}
                        onClick={() =>
                          mutationDelete.mutate({ book_id: data.id })
                        }
                      >
                        Delete
                      </Button> */}
                    </Box>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Box>
          );
        },
      },
    ],
    []
  );

  const data = listBookQuery.data.data;
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

export default RentTable;
