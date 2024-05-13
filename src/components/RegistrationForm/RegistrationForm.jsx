import { Formik, Form, Field, ErrorMessage } from "formik";
import css from "./RegistrationForm.module.css";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations";
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
      <Form className={css.form}>
        <div>
          <label>
            <Field
              className={css.input}
              placeholder="Name"
              type="text"
              name="name"
            />
            <ErrorMessage name="name" as="span" />
          </label>
        </div>

        <div>
          <label>
            <Field
              className={css.input}
              placeholder="Email"
              type="text"
              name="email"
            />
            <ErrorMessage name="email" as="span" />
          </label>
        </div>
        <div>
          <label>
            <Field
              className={css.input}
              placeholder="Password"
              type="password"
              name="password"
            />
            <ErrorMessage name="password" as="span" />
          </label>
        </div>
        <button className={css.btn} type="submit">
          Sign up
        </button>
      </Form>
    </Formik>
  );
};
export default RegistrationForm;
