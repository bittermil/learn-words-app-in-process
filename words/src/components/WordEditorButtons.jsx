import React from "react";
import styles from "./assets/WordEditorButtons.module.css";

function WordEditorButtons(props) {
  return (
    <td className={styles.editor}>
      {props.save && <div className={styles.save}></div>}
      <div className={styles.edit}></div>
      <div className={styles.delete}></div>
    </td>
  );
}

export default WordEditorButtons;
