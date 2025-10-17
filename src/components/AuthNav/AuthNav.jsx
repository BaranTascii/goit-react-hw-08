import { NavLink } from "react-router-dom";
import styles from "../AppBar/AppBar.module.css";

export default function AuthNav() {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/register"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Register
      </NavLink>
      <NavLink
        to="/login"
        className={({ isActive }) =>
          isActive ? `${styles.link} ${styles.active}` : styles.link
        }
      >
        Login
      </NavLink>
    </nav>
  );
}
