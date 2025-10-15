import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import styles from "./ContactForm.module.css";

const schema = Yup.object({
  name: Yup.string().required("Name is required").min(3).max(50),
  number: Yup.string().required("Number is required").min(3).max(50),
});

function ContactForm() {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { name: "", number: "" },
    validationSchema: schema,
    onSubmit: (values, { resetForm }) => {
      dispatch(addContact(values));
      resetForm();
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <input
        name="name"
        placeholder="Name"
        value={formik.values.name}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.name && formik.errors.name && (
        <div className={styles.error}>{formik.errors.name}</div>
      )}

      <input
        name="number"
        placeholder="Number"
        value={formik.values.number}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
      />
      {formik.touched.number && formik.errors.number && (
        <div className={styles.error}>{formik.errors.number}</div>
      )}

      <button type="submit" className={styles.button}>
        Add contact
      </button>
    </form>
  );
}

export default ContactForm;
