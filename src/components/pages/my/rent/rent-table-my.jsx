import { Button } from "@chakra-ui/button";
import { DeleteIcon, EditIcon, InfoIcon } from "@chakra-ui/icons";
import { Image } from "@chakra-ui/image";
import { Badge, Box, Text } from "@chakra-ui/layout";
import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/popover";
import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import { extendRent } from "../../../../modules/rent/api";
import { getStatusRent } from "../../../../utils/get-status-rent";
import { Table } from "../../../ui";
import ExtendRequestModal from "./extend-request-modal";
import ResponseExtendModal from "./response-extend-modal";

const RentTableMy = ({ profileQuery }) => {
  useEffect(() => {}, [profileQuery]);

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenReason, setIsOpenReason] = useState(false);

  const [dataModal, setDataModal] = useState();

  const mutationExtend = useMutation((data) => extendRent(data), {
    onSuccess: () => {
      setIsOpen(false);
      profileQuery.refetch();
    },
  });

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
        Header: "Rent ID",
        accessor: "pinjam_id",
      },
      {
        Header: "Judul Buku",
        accessor: "book.judul_buku",
      },
      {
        Header: "Tanggal Peminjaman",
        accessor: (data) => {
          return <>{dayjs(data.tanggal_pinjam).format("YYYY-MM-DD")}</>;
        },
      },
      {
        Header: "Tanggal Pengembalian",
        accessor: (data) => {
          return <>{dayjs(data.tanggal_pengembalian).format("YYYY-MM-DD")}</>;
        },
      },
      {
        Header: "Denda Buku",
        accessor: (data, id) => {
          return (
            <Box>
              <Text>{data.denda}</Text>
            </Box>
          );
        },
      },
      {
        Header: "Status Buku",
        accessor: (data) => {
          return <>{getStatusRent(data.status_pinjam.toString()).text}</>;
        },
      },

      {
        Header: "Action",
        accessor: (data, id) => {
          const dateNow = dayjs().format("YYYY-MM-DD");
          const dateReturn = dayjs(data.tanggal_pengembalian);
          const diffDate = dateReturn.diff(dateNow, "days");
          return (
            <Box display="flex">
              {data.is_extend_confirm === 0 && data.status_pinjam === 3 ? (
                <Button width="full" disabled>
                  Menunggu Status Perpanjangan
                </Button>
              ) : data.is_extend_confirm === 0 &&
                data.status_pinjam > 1 &&
                diffDate > 2 ? (
                <Box display="flex" experimental_spaceX={2}>
                  <Button
                    onClick={() => {
                      setIsOpenReason(true);
                      setDataModal(data);
                      // setIsOpen(true);
                      // setDataModal(data);
                    }}
                  >
                    <InfoIcon />
                  </Button>
                  <Button
                    width="full"
                    disabled
                    colorScheme="purple"
                    onClick={() => {
                      setIsOpen(true);
                      setDataModal(data);
                    }}
                  >
                    Minta Perpanjangan
                  </Button>
                </Box>
              ) : data.is_extend_confirm === 0 && data.status_pinjam > 1 ? (
                <Button
                  width="full"
                  colorScheme="purple"
                  onClick={() => {
                    setIsOpen(true);
                    setDataModal(data);
                  }}
                >
                  Minta Perpanjangan
                </Button>
              ) : (
                "-"
              )}
            </Box>
          );
        },
      },
    ],
    []
  );

  const data = profileQuery.data?.user.rents;
  console.log(data);
  return (
    <>
      <ResponseExtendModal
        isOpen={isOpenReason}
        onClose={() => setIsOpenReason(false)}
        dataModal={dataModal}
      />
      <ExtendRequestModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dataModal={dataModal}
        mutationExtend={mutationExtend}
      />
      <Table data={data} columns={columns} />
    </>
  );
};

export default RentTableMy;
