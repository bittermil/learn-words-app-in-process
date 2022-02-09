import React, { useState, useEffect } from "react";
import styles from "./assets/Word.module.css";
import Input from "./Input";

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
    console.log(e);
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  return (
    <>
      {(isEdit && (
        <tr className={styles.tableRow}>
          <td>
            <Input
              name="russian"
              value={values.russian}
              changeValues={changeValues}
            />
          </td>
          <td>
            <Input
              name="english"
              value={values.english}
              changeValues={changeValues}
            />
          </td>
          <td>
            <Input
              name="transcription"
              value={values.transcription}
              changeValues={changeValues}
            />
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
