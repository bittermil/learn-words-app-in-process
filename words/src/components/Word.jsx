import React, { useState } from "react";
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
  const [disable, setSaveOff] = useState(false);

  const setEdit = () => {
    editWord(!isEdit);
  };

  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const disableSaveButton = () => {
    setSaveOff(!disable);
    console.log("disabled", disable);
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
              saveOff={disableSaveButton}
            />
          </td>
          <td>
            <Input
              name="english"
              value={values.english}
              changeValues={changeValues}
              saveOff={disableSaveButton}
            />
          </td>
          <td>
            <Input
              name="transcription"
              value={values.transcription}
              changeValues={changeValues}
              saveOff={disableSaveButton}
            />
          </td>

          <td className={styles.editor}>
            <button
              onClick={setEdit}
              className={styles.save}
              disabled={disable}
            ></button>
            <div className={styles.cancel}></div>
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
