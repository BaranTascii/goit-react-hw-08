import React from "react";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors.js";
import Contact from "../Contact/Contact.jsx";
import styles from "./ContactList.module.css";

function ContactList() {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts || contacts.length === 0) {
    return (
      <p style={{ textAlign: "center", color: "var(--muted)" }}>
        No contacts yet.
      </p>
    );
  }

  return (
    <ul className={styles.list}>
      {contacts.map((c) => (
        <li key={c.id} className={styles.item}>
          <Contact id={c.id} name={c.name} number={c.number} />
        </li>
      ))}
    </ul>
  );
}

export default ContactList;