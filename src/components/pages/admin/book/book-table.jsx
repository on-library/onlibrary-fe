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
import { useMutation } from "react-query";
import { deleteBook } from "../../../../modules/book/api";
import { Table } from "../../../ui";
import BookEditModal from "./book-edit-modal";

const BookTable = ({ listBookQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});

  const mutationDelete = useMutation((data) => deleteBook(data), {
    onSuccess: () => {
      listBookQuery.refetch();
    },
  });

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
        Header: "Gambar Buku",
        accessor: () => {
          return (
            <Image
              display="flex"
              mx="auto"
              src="gibbresh.png"
              fallbackSrc="https://via.placeholder.com/150x200"
            />
          );
        }, // accessor is the "key" in the data
      },
      {
        Header: "Nama Buku",
        accessor: "judul_buku",
      },
      {
        Header: "Category",
        accessor: "category.nama",
      },
      {
        Header: "Genre",
        accessor: (data) => {
          return (
            <Box display="flex" flexDir="wrap" experimental_spaceX={2}>
              {data?.genres?.map((item) => (
                <Badge>{item?.nama}</Badge>
              ))}
            </Box>
          );
        },
      },
      {
        Header: "Stock",
        accessor: "stok",
      },
      {
        Header: "Action",
        accessor: (data, id) => {
          return (
            <Box display="flex" experimental_spaceX={4}>
              <Button
                colorScheme="green"
                onClick={() => {
                  setIsOpen(true);
                  setDataModal({ ...data, idRow: id });
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
                      <Button
                        colorScheme="red"
                        isLoading={mutationDelete.isLoading}
                        onClick={() =>
                          mutationDelete.mutate({ book_id: data.id })
                        }
                      >
                        Delete
                      </Button>
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
      <BookEditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dataModal={dataModal}
      />
      <Table data={data} columns={columns} />
    </>
  );
};

export default BookTable;
