import React, { useState } from "react";
import styles from "./assets/Word.module.css";

function Word(props) {
  const [isEdit, editWord] = useState("false");

  const setEdit = () => {
    editWord(!isEdit);
  };

  return (
    <>
      <tr className={styles.tableRow}>
        {}
        <td>{props.russian}</td>
        <td>{props.english}</td>
        <td>{props.transcription}</td>
        <td className={styles.editor}>
          {props.onEdit && <div className={styles.save}></div>}
          <div className={styles.edit}></div>
          <div className={styles.delete}></div>
        </td>
      </tr>
    </>
  );
}

export default Word;
