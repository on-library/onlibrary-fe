import { Button } from "@chakra-ui/button";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useMemo } from "react";
import { Table } from "../../../ui";

const BookTable = () => {
  const columns = useMemo(
    () => [
      {
        Header: "Gambar Buku",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Nama Buku",
        accessor: "col2",
      },
      {
        Header: "Stock",
        accessor: "col3",
      },
      {
        Header: "Action",
        accessor: () => {
          return (
            <Box display="flex" experimental_spaceX={4}>
              <Button colorScheme="teal">
                <EditIcon />
              </Button>
              <Button colorScheme="red">
                <DeleteIcon />
              </Button>
            </Box>
          );
        },
      },
    ],
    []
  );

  const data = useMemo(
    () => [
      {
        col1: "Hello",
        col2: "World",
      },
      {
        col1: "react-table",
        col2: "rocks",
      },
      {
        col1: "whatever",
        col2: "you want",
      },
    ],
    []
  );

  return <Table data={data} columns={columns} />;
};

export default BookTable;
