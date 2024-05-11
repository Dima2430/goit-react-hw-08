import RegistrationForm from "../components/RegistrationForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { selectIsLoggedIn } from "../redux/auth/selectors";

const RegistrationPage = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return <RegistrationForm />;
};

export default RegistrationPage;
