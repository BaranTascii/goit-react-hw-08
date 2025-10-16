import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div className={styles.center}>
      <div className={styles.card}>
        <h1 className={styles.title}>Phonebook</h1>
        <p className={styles.text}>
          Register or login to manage your personal contacts securely.
        </p>
      </div>
    </div>
  );
}

export default Home;