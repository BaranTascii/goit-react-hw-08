import React from "react";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";
import styles from "./Contact.module.css";

function Contact({ contact }) {
  const dispatch = useDispatch();

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.name}>{contact.name}</div>
        <div className={styles.number}>{contact.number}</div>
      </div>
      <button
        className={styles.delete}
        onClick={() => dispatch(deleteContact(contact.id))}
      >
        Delete
      </button>
    </li>
  );
}

export default Contact;
