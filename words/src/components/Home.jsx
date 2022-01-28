import React from "react";
import styles from "./assets/Home.module.css";

function Home() {
  return (
    <>
      <div className={styles.image}></div>
      <div className={styles.homeTitle}>
        Hi! We're glad to see you there. With our app you can add new words and
        quickly memo them. Learn new words and have fun.
      </div>
    </>
  );
}

export default Home;
