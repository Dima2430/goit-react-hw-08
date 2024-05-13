import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../../redux/auth/operations";
import * as Yup from "yup";
import css from "./LoginForm.module.css";
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
      <Form className={css.form}>
        <div>
          <label>
            <Field
              placeholder="Email"
              className={css.input}
              type="text"
              name="email"
            />
            <ErrorMessage name="email" as="span" />
          </label>
        </div>
        <div>
          <label>
            <Field
              placeholder="Password"
              className={css.input}
              type="password"
              name="password"
            />
            <ErrorMessage name="password" as="span" />
          </label>
        </div>
        <button className={css.btn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
};
export default LoginForm;
