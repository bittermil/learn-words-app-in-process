import React from "react";
import WordEditorButtons from "./WordEditorButtons";
import styles from "./assets/WordEditor.module.css";

function WordEditor() {
  return (
    <tr>
      <td>
        <input className={styles.input} placeholder="Add Russian word"></input>
      </td>
      <td>
        <input className={styles.input} placeholder="Add English word"></input>
      </td>
      <td>
        <input className={styles.input} placeholder="Add transcription"></input>
      </td>
      <WordEditorButtons save></WordEditorButtons>
    </tr>
  );
}

export default WordEditor;
