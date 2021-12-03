import { useEffect } from "react";
import { useMutation } from "react-query";
import { useLocation, useNavigate, useParams } from "react-router";
import { verifyAuth } from "../../modules/auth/api";

const Verify = () => {
  const location = useLocation();
  const params = useParams();
  const navigate = useNavigate();

  const username = new URLSearchParams(location.search).get("username");

  const mutation = useMutation(
    () => verifyAuth({ code: +params.code, username }),
    {
      onSuccess: () => {
        navigate("/auth/login?status=success_verify");
      },
    }
  );

  useEffect(() => {
    mutation.mutate();
  }, [1]);

  return <div></div>;
};

export default Verify;
