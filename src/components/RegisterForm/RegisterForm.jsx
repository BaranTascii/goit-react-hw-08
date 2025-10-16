import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { register } from "../../redux/auth/operations.js";
import styles from "./RegisterForm.module.css";

const schema = Yup.object().shape({
  name: Yup.string().required("Required").min(2),
  email: Yup.string().required("Required").email("Invalid email"),
  password: Yup.string().required("Required").min(6),
});

function RegisterForm() {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        dispatch(register(values));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <h3 className={styles.title}>Create account</h3>

        <label className={styles.label}>
          Name
          <Field name="name" className={styles.input} />
        </label>
        <ErrorMessage name="name" component="div" className={styles.error} />

        <label className={styles.label}>
          Email
          <Field name="email" type="email" className={styles.input} />
        </label>
        <ErrorMessage name="email" component="div" className={styles.error} />

        <label className={styles.label}>
          Password
          <Field name="password" type="password" className={styles.input} />
        </label>
        <ErrorMessage
          name="password"
          component="div"
          className={styles.error}
        />

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
}

export default RegisterForm;
