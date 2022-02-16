import React, { useState, useEffect } from "react";
import styles from "./assets/Wordlist.module.css";
import { useWordAPI } from "./contexts/WordsContextProvider";
import { cyrillicRegex, latinRegex } from "./regex.js";

function WordAdder(props) {
  const defValues = {
    russian: "",
    english: "",
    transcription: "",
  };
  const [values, setValues] = useState(defValues);
  const [formData, getFormData] = useState([]);
  const { addWords } = useWordAPI();

  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
    getFormData(values);
  };

  // function onValidate(inputValue) {
  //   if (inputValue.length < 1) {
  //     return false;
  //   }

  //   if (props.regex && !props.regex.test(inputValue)) {
  //     return false;
  //   }

  //   return true;
  // }

  const submitForm = (e) => {
    e.preventDefault();
    addWords(formData);
  }

  console.log(formData);

  return (
    <>
      <h1>Add words you wish to learn</h1>
      <form onSubmit={submitForm}>
        <input
          placeholder="English word"
          name="english"
          value={values.english}
          onChange={changeValues}
        ></input>
        <input
          placeholder="Russian word"
          name="russian"
          value={values.russian}
          onChange={changeValues}
        ></input>
        <input
          placeholder="Transcription"
          name="transcription"
          value={values.transcription}
          onChange={changeValues}
        ></input>
        <button>Submit</button>
      </form>
    </>
  );
}

export default WordAdder;
