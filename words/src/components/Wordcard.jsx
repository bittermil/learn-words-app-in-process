import React from "react";
import styles from "./assets/Wordcard.module.css";

function Card(props) {
  return (
    <div className={styles.card}>
      <div className={styles.english}>{props.english}</div>
      {props.front ? (
        <div className={styles.transcription}>{props.transcription}</div>
      ) : (
        <div className={styles.russian}>{props.russian}</div>
      )}
    </div>
  );
}

export default Card;
