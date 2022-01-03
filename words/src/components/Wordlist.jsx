import React from "react";
import Word from "./Word";
import styles from "./assets/Wordlist.module.css";
import { wordsData } from "./words";

function Wordlist() {
  return (
    <React.Fragment>
      <h1>Your words</h1>
      <table className={styles.table}>
        <thead>
          <tr className={styles.tableRow}>
            <th>Russian</th>
            <th>English</th>
            <th>Transcription</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <Word edit></Word>
          {wordsData.map((word) => (
            <Word {...word}></Word>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
}

export default Wordlist;
