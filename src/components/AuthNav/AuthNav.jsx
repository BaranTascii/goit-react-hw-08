import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./AuthNav.module.css";

function AuthNav() {
  return (
    <div className={styles.wrap}>
      <NavLink to="/register" className={styles.btn}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.btn}>
        Login
      </NavLink>
    </div>
  );
}

export default AuthNav;
