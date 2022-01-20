import React from "react";
import { Link } from "react-router-dom";
import styles from "./assets/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.projectName}>Word Quiz App</div>
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
        <img className={styles.logo}></img>
      </Link>
    </header>
  );
}

export default Header;
