import { useEffect } from "react";
import { useNavigate } from "react-router";

const LandingPage = () => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/auth/login");
  }, []);
  return <div></div>;
};

export default LandingPage;
