import React, { useState, useEffect } from "react";
import styles from "./assets/Word.module.css";
import Input from "./Input";
import { cyrillicRegex, latinRegex } from "./regex.js";

function Word(props) {
  const defValues = {
    russian: props.russian,
    english: props.english,
    transcription: props.transcription,
  };

  const [isEdit, editWord] = useState(false);
  const [values, setValues] = useState(defValues);
  const [buttonStatus, setButtonStatus] = useState("");
  const [errors, recalcErrors] = useState([]);
  const [savedData, saveData] = useState([]);

  // есть ли ошибки в других полях
  let errorsSum = 0;

  if (errors.length) {
    errorsSum = errors.reduce(function (a, b) {
      return a + b;
    });
  }

  // добавлять ошибки
  function addErrors() {
    recalcErrors([...errors, 1]);
  }

  // удалять ошибки
  function deleteErrors() {
    if (errorsSum > 1) recalcErrors([...errors, -1]);
  }

  function checkErrors() {
    // тут надо выяснить, есть ли в других полях ошибки, включить кнопку только тогда
    if (errorsSum > 0) {
      setButtonStatus("disabled");
    } else setButtonStatus("");

    console.log(errorsSum);
  }

  // перейти в режим редактирования
  const setEdit = () => {
    editWord(!isEdit);
  };

  // обновить значение инпутов
  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  function onValidate(inputValue) {
    if (inputValue.length < 1) {
      return false;
    }

    if (props.regex && !props.regex.test(inputValue)) {
      return false;
    }

    return true;
  }

  function onSaveData() {
    if (onValidate)
      saveData([
        ...savedData,
        values.english,
        values.russian,
        values.transcription,
      ]);
  }

  useEffect(() => {
    console.log(savedData);
  }, [savedData]);

  return (
    <>
      {(isEdit && (
        <tr className={styles.tableRow}>
          <td>
            <Input
              name="russian"
              value={values.russian}
              changeValues={changeValues}
              onValidate={onValidate}
              addErrors={addErrors}
              deleteErrors={deleteErrors}
              checkErrors={checkErrors}
              regex={cyrillicRegex}
            />
          </td>
          <td>
            <Input
              name="english"
              value={values.english}
              changeValues={changeValues}
              onValidate={onValidate}
              addErrors={addErrors}
              deleteErrors={deleteErrors}
              checkErrors={checkErrors}
              regex={latinRegex}
            />
          </td>
          <td>
            <Input
              name="transcription"
              value={values.transcription}
              onValidate={onValidate}
              changeValues={changeValues}
              addErrors={addErrors}
              deleteErrors={deleteErrors}
              checkErrors={checkErrors}
            />
          </td>

          <td className={styles.editor}>
            <button
              onClick={() => {
                setEdit();
                onSaveData();
              }}
              disabled={buttonStatus}
              className={styles.save}
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
