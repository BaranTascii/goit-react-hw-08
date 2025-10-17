import Contact from "../Contact/Contact";
import styles from "./ContactList.module.css";
import { useSelector } from "react-redux";
import { selectFilteredContacts } from "../../redux/contacts/selectors";

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  if (!contacts?.length) {
    return <p className={styles.empty}>Henüz kişi yok.</p>;
  }

  return (
    <ul className={styles.list}>
      {contacts.map(
        (contact) => contact && <Contact key={contact.id} contact={contact} />
      )}
    </ul>
  );
};

export default ContactList;
