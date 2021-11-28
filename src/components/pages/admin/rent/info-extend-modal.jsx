import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Box, GridItem, SimpleGrid, Text } from "@chakra-ui/layout";
import { Textarea } from "@chakra-ui/textarea";
import dayjs from "dayjs";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { Modal } from "../../../ui";

const InfoExtendModal = ({ isOpen, onClose, dataModal }) => {
  return (
    <Modal
      title={`Informasi request perpanjangan`}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <SimpleGrid columns={12} gap={2}>
          <GridItem colSpan={3}>
            <Text>Nama Buku</Text>
          </GridItem>
          <GridItem colSpan={9}>
            <Text fontWeight="semibold">{dataModal?.book?.judul_buku}</Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Text>Tanggal Peminjaman</Text>
          </GridItem>
          <GridItem colSpan={9}>
            <Text fontWeight="semibold">
              {dayjs(dataModal?.tanggal_pinjam).format("dddd, MM-DD-YYYY")}
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Text>Tanggal Pengembalian</Text>
          </GridItem>
          <GridItem colSpan={9}>
            <Text fontWeight="semibold">
              {dayjs(dataModal?.tanggal_pengembalian).format(
                "dddd, MM-DD-YYYY"
              )}
            </Text>
          </GridItem>
          <GridItem colSpan={3}>
            <Text>Alasan Perpanjangan</Text>
          </GridItem>
          <GridItem colSpan={9}>
            <Text fontWeight="semibold">{dataModal?.alasan_perpanjangan}</Text>
          </GridItem>
        </SimpleGrid>
      }
      modalFooter={
        <Box>
          {" "}
          <Button variant="ghost" onClick={onClose}>
            Close
          </Button>
        </Box>
      }
    />
  );
};

export default InfoExtendModal;
