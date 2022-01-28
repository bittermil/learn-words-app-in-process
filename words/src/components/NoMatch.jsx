import React from "react";
import styles from "./assets/NoMatch.module.css";

function NoMatch() {
  return (
    <>
      <div className={styles.image}></div>
      <div className={styles.text}>
        Sorry! There's nothing here. Try another page.
      </div>
    </>
  );
}

export default NoMatch;
