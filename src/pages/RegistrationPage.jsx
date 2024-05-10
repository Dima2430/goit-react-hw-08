import RegistrationForm from "../components/RegistrationForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const RegistrationPage = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return <RegistrationForm />;
};

export default RegistrationPage;
