import { Button } from "@chakra-ui/button";
import { Box, Text } from "@chakra-ui/layout";
import { Modal } from "../../../../ui";
import ReactStars from "react-rating-stars-component";
import { Textarea } from "@chakra-ui/textarea";
import { useMutation } from "react-query";
import { useEffect, useState } from "react";
import { Alert, AlertIcon } from "@chakra-ui/alert";
import { addReview } from "../../../../../modules/reviews/api";
import { useParams } from "react-router";

const ReviewModal = ({ isOpen, onClose, queryReview }) => {
  const mutation = useMutation((data) => addReview(data), {
    onSuccess: () => {
      queryReview.refetch();
    },
  });
  const params = useParams();
  const [status, setStatus] = useState(false);
  const [rating, setRating] = useState();
  const [review, setReview] = useState("");

  const onSubmit = () => {
    console.log(rating);
    console.log(review);

    setStatus(true);

    mutation.mutate({ bookId: params.id, comment: review, rating: +rating });
  };

  useEffect(() => {
    if (status) {
      setTimeout(() => {
        setStatus(false);
        onClose();
      }, 2000);
    }
  }, [status]);

  return (
    <Modal
      title={``}
      isOpen={isOpen}
      onClose={onClose}
      modalBody={
        <Box>
          <Box>
            {status ? (
              <Alert status="success">
                <AlertIcon />
                Ulasan berhasil ditambah
              </Alert>
            ) : (
              ""
            )}
            <Text fontWeight="semibold" fontSize="2xl" textAlign="center">
              Beri Ulasan
            </Text>
            <Box
              my={4}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <ReactStars
                onChange={(data) => setRating(data)}
                value={4}
                count={5}
                size="64"
                activeColor="#ffd700"
              />
            </Box>
            <Text fontSize="lg">Isi review</Text>
            <Textarea px={2} onChange={(e) => setReview(e.target.value)} />
            <Box textAlign="center" mt={6}>
              <Button
                isLoading={mutation.isLoading}
                colorScheme="purple"
                onClick={() => onSubmit()}
              >
                Tambahkan ulasan
              </Button>
            </Box>
          </Box>
        </Box>
      }
    />
  );
};

export default ReviewModal;
