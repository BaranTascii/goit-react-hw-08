import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm.jsx";
import styles from "./Login.module.css";

function Login() {
  return (
    <div className={styles.center}>
      <div className={styles.card}>
        <LoginForm />
      </div>
    </div>
  );
}

export default Login;