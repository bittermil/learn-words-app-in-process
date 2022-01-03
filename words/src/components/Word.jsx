import React from "react";
import WordEditor from "./WordEditor";
import WordEditorButtons from "./WordEditorButtons";
import styles from "./assets/Word.module.css";

function Word(props) {
  return (
    <React.Fragment>
      {props.edit ? (
        <WordEditor></WordEditor>
      ) : (
        <tr className={styles.tableRow}>
          <td>{props.russian}</td>
          <td>{props.english}</td>
          <td>{props.transcription}</td>
          <WordEditorButtons></WordEditorButtons>
        </tr>
      )}
    </React.Fragment>
  );
}

export default Word;
