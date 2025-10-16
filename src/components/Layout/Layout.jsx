import React from "react";
import { Outlet } from "react-router-dom";
import AppBar from "../AppBar/AppBar.jsx";
import styles from "./Layout.module.css";

function Layout() {
  return (
    <div>
      <AppBar />
      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
