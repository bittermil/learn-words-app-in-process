import React from "react";
import { Link } from "react-router-dom";
import styles from "./assets/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <Link to="/">
        <div className={styles.projectName}>Word Quiz App</div>
      </Link>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/words">My words</Link>
          </li>
          <li>
            <Link to="/practice">Practice</Link>
          </li>
        </ul>
      </nav>
      <Link to="/">
        <div className={styles.logo}></div>
      </Link>
    </header>
  );
}

export default Header;
