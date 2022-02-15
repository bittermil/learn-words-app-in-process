import React, { useState, useContext } from "react";
import Word from "./Word";
import styles from "./assets/Wordlist.module.css";
import { useWordAPI } from "./contexts/WordsContextProvider";

function Wordlist() {
  const [errorText, setErrorText] = useState("");
  const { words, isLoading } = useWordAPI();

  function handleErrorText(text) {
    setErrorText(text);
  }

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
          {words.map((word) => (
            <Word
              handleErrorTextCallBack={handleErrorText}
              key={word.id}
              {...word}
            ></Word>
          ))}
        </tbody>
      </table>
      <div className={styles.errorText}>{errorText}</div>
    </>
  );
}

export default Wordlist;
