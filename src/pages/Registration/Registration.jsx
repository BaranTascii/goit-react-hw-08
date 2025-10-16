import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm.jsx';
import styles from './Registration.module.css';

function Registration(){
  return (
    <div className={styles.center}>
      <div className={styles.card}>
        <RegisterForm />
      </div>
    </div>
  );
}

export default Registration;
