import React, { useEffect } from "react";
import ContactForm from "../../components/ContactForm/ContactForm.jsx";
import ContactList from "../../components/ContactList/ContactList.jsx";
import Filter from "../../components/Filter/Filter.jsx";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../../redux/contacts/operations.js";
import { selectContactsLoading } from "../../redux/contacts/selectors.js";
import styles from "./Contacts.module.css";

function Contacts() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.center}>
      <div className={styles.card}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <Filter />
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading...</p>
        ) : (
          <ContactList />
        )}
      </div>
    </div>
  );
}

export default Contacts;