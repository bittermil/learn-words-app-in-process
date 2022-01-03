import React from "react";
import styles from "./assets/Header.module.css";

function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.projectName}>Word Quiz App</div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <a href="#">My words</a>
          </li>
          <li>
            <a href="#">Learning</a>
          </li>
          <li>
            <a href="#">Profile</a>
          </li>
        </ul>
      </nav>
      <img className={styles.logo}></img>
    </header>
  );
}

export default Header;
