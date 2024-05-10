import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/auth/slice";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LoginPage = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn); // make sure to select the correct state
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/contacts");
    }
  }, [isLoggedIn, navigate]);

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().required("Email is required").min(3).max(50),
        password: Yup.string().required("Password is required").min(8).max(50),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(login(values));
        resetForm();
      }}
    >
      <Form>
        <div>
          <label>
            <span> Email</span>
            <Field type="text" name="email" />
            <ErrorMessage name="email" as="span" />
          </label>
        </div>
        <div>
          <label>
            <span> Password</span>

            <Field type="password" name="password" />
            <ErrorMessage name="password" as="span" />
          </label>
        </div>
        <button type="submit">Log in</button>
      </Form>
    </Formik>
  );
};
export default LoginPage;
