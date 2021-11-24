import { Button } from "@chakra-ui/button";
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box } from "@chakra-ui/layout";
import { useMemo, useState } from "react";
import { Table } from "../../../ui";
import BookEditModal from "./book-edit-modal";

const BookTable = ({ listBookQuery }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState({});
  const columns = useMemo(
    () => [
      {
        Header: "Gambar Buku",
        accessor: "col1", // accessor is the "key" in the data
      },
      {
        Header: "Nama Buku",
        accessor: "judul_buku",
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

  const data = useMemo(() => listBookQuery.data.data, []);

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
