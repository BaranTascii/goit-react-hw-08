import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations.js";
import styles from "./Contact.module.css";

function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  return (
    <div className={styles.card}>
      <div className={styles.info}>
        <div className={styles.name}>{name}</div>
        <div className={styles.number}>{number}</div>
      </div>
      <button
        className={styles.btn}
        onClick={() => dispatch(deleteContact(id))}
      >
        Delete
      </button>
    </div>
  );
}

export default Contact;
