import React, { useState } from "react";
import styles from "./assets/Word.module.css";

function Word(props) {
  const defValues = {
    russian: props.russian,
    english: props.english,
    transcription: props.transcription,
  };

  const [isEdit, editWord] = useState(false);
  const [values, setValues] = useState(defValues);

  const setEdit = () => {
    editWord(!isEdit);
  };

  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });
  };

  return (
    <>
      {(isEdit && (
        <tr className={styles.tableRow}>
          <td>
            <input
              name="russian"
              value={values.russian}
              className={styles.input}
              onChange={changeValues}
            ></input>
          </td>
          <td>
            <input
              name="english"
              value={values.english}
              className={styles.input}
              onChange={changeValues}
            ></input>
          </td>
          <td>
            <input
              name="transcription"
              value={values.transcription}
              className={styles.input}
              onChange={changeValues}
            ></input>
          </td>

          <td className={styles.editor}>
            <div onClick={setEdit} className={styles.save}></div>
            <div onClick={setEdit} className={styles.cancel}></div>
          </td>
        </tr>
      )) || (
        <tr className={styles.tableRow}>
          <td>{values.russian}</td>
          <td>{values.english}</td>
          <td>{values.transcription}</td>
          <td className={styles.editor}>
            <div onClick={setEdit} className={styles.edit}></div>
            <div className={styles.delete}></div>
          </td>
        </tr>
      )}
    </>
  );
}

export default Word;
