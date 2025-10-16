import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/operations.js';
import { selectUser } from '../../redux/auth/selectors.js';
import styles from './UserMenu.module.css';

function UserMenu(){
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  return (
    <div className={styles.wrap}>
      <span className={styles.name}>{user?.name || user?.email}</span>
      <button className={styles.btn} onClick={() => dispatch(logOut())}>Logout</button>
    </div>
  );
}

export default UserMenu;
