import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return <p className={styles.empty}>No contacts yet.</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map((contact) => (
        <Contact key={contact.id} contact={contact} />
      ))}
    </ul>
  );
}

export default ContactList;
