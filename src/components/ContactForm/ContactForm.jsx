import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../redux/contacts/operations.js";
import { selectContacts } from "../../redux/contacts/selectors.js";
import styles from "./ContactForm.module.css";

const schema = Yup.object().shape({
  name: Yup.string().required("Required").min(3),
  number: Yup.string().required("Required").min(3),
});

function ContactForm() {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.items);

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      validationSchema={schema}
      onSubmit={(values, { resetForm }) => {
        const found = contacts.find(
          (c) =>
            c.name.trim().toLowerCase() === values.name.trim().toLowerCase()
        );
        if (found) {
          alert(`${values.name} is already in contacts.`);
          return;
        }
        dispatch(addContact(values));
        resetForm();
      }}
    >
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field name="name" className={styles.input} />
        </label>
        <ErrorMessage name="name" component="div" className={styles.error} />
        <label className={styles.label}>
          Number
          <Field name="number" className={styles.input} />
        </label>
        <ErrorMessage name="number" component="div" className={styles.error} />
        <button type="submit" className={styles.button}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;
