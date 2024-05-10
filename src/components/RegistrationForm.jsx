import { Formik, Form, Field, ErrorMessage } from "formik";

import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../redux/auth/slice";
const RegistrationForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required").min(3).max(50),
        email: Yup.string().required("Email is required").min(3).max(50),
        password: Yup.string().required("Password is required").min(8).max(50),
      })}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form>
        <div>
          <label>
            <span>Name</span>
            <Field type="text" name="name" />
            <ErrorMessage name="name" as="span" />
          </label>
        </div>

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
        <button type="submit">Sign up</button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
