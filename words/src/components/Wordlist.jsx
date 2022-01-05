import React from "react";
import Word from "./Word";
import styles from "./assets/Wordlist.module.css";
import { wordsData } from "./words";

function Wordlist() {
  return (
    <>
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
          {wordsData.map((word) => (
            <Word key={word.id} {...word}></Word>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Wordlist;
