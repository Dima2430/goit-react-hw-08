import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../redux/auth/operations";
import * as Yup from "yup";

const LoginForm = () => {
  const dispatch = useDispatch();

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
export default LoginForm;
