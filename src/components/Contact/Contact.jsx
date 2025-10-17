import styles from "./Contact.module.css";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  if (!contact) return null;

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <li className={styles.item}>
      <span className={styles.text}>
        {contact.name}: {contact.number}
      </span>
      <button className={styles.btn} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;
