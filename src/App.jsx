import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { fetchContacts } from "./redux/contactsOps";
import styles from "./App.module.css";
import {
  selectContactsLoading,
  selectContactsError,
} from "./redux/contactsSlice";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectContactsLoading);
  const error = useSelector(selectContactsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {loading && <p className={styles.info}>Loading...</p>}
        {error && <p className={styles.error}>Error: {error}</p>}
        <ContactList />
      </div>
    </div>
  );
}

export default App;
