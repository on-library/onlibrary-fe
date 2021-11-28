import { useEffect } from "react";
import { useNavigate } from "react-router";

const RedirectToLanding = ({ to }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  }, []);

  return <></>;
};

export default RedirectToLanding;
