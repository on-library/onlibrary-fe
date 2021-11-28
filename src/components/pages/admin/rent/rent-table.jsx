import { Button } from "@chakra-ui/button";
import { InfoIcon, WarningIcon } from "@chakra-ui/icons";
import { Badge, Box, Text } from "@chakra-ui/layout";

import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import { useMutation } from "react-query";
import {
  confirmRent,
  declineRent,
  extendConfirmRent,
  extendDeclineRent,
  returnRent,
  takeRent,
} from "../../../../modules/rent/api";
import { getStatusRent } from "../../../../utils/get-status-rent";
import { Table } from "../../../ui";
import InfoExtendModal from "./info-extend-modal";

const RentTable = ({ listRentQuery }) => {
  useEffect(() => {}, [listRentQuery]);

  const [isOpen, setIsOpen] = useState(false);
  const [dataModal, setDataModal] = useState();

  const mutationConfirm = useMutation(
    (data) => confirmRent({ rent_id: data.rent_id }),
    {
      onSuccess: () => {
        listRentQuery.refetch();
      },
    }
  );

  const mutationDecline = useMutation(
    (data) => declineRent({ rent_id: data.rent_id }),
    {
      onSuccess: () => {
        listRentQuery.refetch();
      },
    }
  );

  const mutationTake = useMutation(
    (data) => takeRent({ rent_id: data.rent_id }),
    {
      onSuccess: () => {
        listRentQuery.refetch();
      },
    }
  );

  const mutationReturn = useMutation(
    (data) => returnRent({ rent_id: data.rent_id }),
    {
      onSuccess: () => {
        listRentQuery.refetch();
      },
    }
  );

  const mutationExtendConfirm = useMutation(
    (data) => extendConfirmRent({ rent_id: data.rent_id }),
    {
      onSuccess: () => {
        listRentQuery.refetch();
      },
    }
  );

  const mutationExtendDecline = useMutation(
    (data) => extendDeclineRent({ rent_id: data.rent_id }),
    {
      onSuccess: () => {
        listRentQuery.refetch();
      },
    }
  );

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
        accessor: (data) => {
          const textStatus = getStatusRent(
            data?.status_pinjam?.toString()
          ).text;
          return <>{textStatus}</>;
        }, // accessor is the "key" in the data
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
        Header: "Detail Info",
        accessor: (data, id) => {
          return (
            <Box>
              {data.status_pinjam === 1 ? (
                <Text>
                  Durasi Pengembalian :{" "}
                  {dayjs(data.tanggal_pengembalian).diff(
                    data.tanggal_pinjam,
                    "day"
                  )}{" "}
                  hari
                </Text>
              ) : data.status_pinjam === 0 ? (
                <Text textAlign="center">-</Text>
              ) : data.status_pinjam === 2 || data.status_pinjam === 3 ? (
                <Text>
                  Durasi pengembalian :{" "}
                  {dayjs(data.tanggal_pengembalian).diff(
                    data.tanggal_pinjam,
                    "day"
                  )}{" "}
                  hari
                </Text>
              ) : (
                ""
              )}
            </Box>
          );
        },
      },

      {
        Header: "Action",
        accessor: (data, id) => {
          return (
            <Box>
              {data.status_pinjam === 0 ? (
                <Box display="flex" experimental_spaceX={4}>
                  <Button
                    colorScheme="purple"
                    onClick={() => {
                      mutationConfirm.mutate({ rent_id: data.pinjam_id });
                    }}
                  >
                    Konfirmasi
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() =>
                      mutationDecline.mutate({ rent_id: data.pinjam_id })
                    }
                  >
                    Tolak
                  </Button>
                </Box>
              ) : data.status_pinjam === 1 ? (
                <Box>
                  <Button
                    w="full"
                    onClick={() =>
                      mutationTake.mutate({ rent_id: data.pinjam_id })
                    }
                  >
                    Buku telah diambil
                  </Button>
                </Box>
              ) : data.status_pinjam === 2 ? (
                <Box>
                  <Button
                    w="full"
                    colorScheme="purple"
                    onClick={() =>
                      mutationReturn.mutate({ rent_id: data.pinjam_id })
                    }
                  >
                    Buku telah dikembalikan
                  </Button>
                </Box>
              ) : data.status_pinjam === 3 ? (
                <Box display="flex" experimental_spaceX={4}>
                  <Button
                    onClick={() => {
                      setIsOpen(true);
                      setDataModal(data);
                    }}
                  >
                    <InfoIcon />
                  </Button>
                  <Button
                    colorScheme="purple"
                    onClick={() =>
                      mutationExtendConfirm.mutate({ rent_id: data.pinjam_id })
                    }
                  >
                    Konfirmasi
                  </Button>
                  <Button
                    colorScheme="red"
                    onClick={() =>
                      mutationExtendDecline.mutate({ rent_id: data.pinjam_id })
                    }
                  >
                    Tolak
                  </Button>
                </Box>
              ) : (
                ""
              )}
            </Box>
          );
        },
      },
    ],
    []
  );

  const data = listRentQuery.data.data.filter(
    (item) => item.status_pinjam !== -3
  );

  return (
    <>
      {/* <BookEditModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dataModal={dataModal}
      /> */}
      <InfoExtendModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        dataModal={dataModal}
      />
      <Table data={data} columns={columns} />
    </>
  );
};

export default RentTable;
