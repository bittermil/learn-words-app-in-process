import React, { useState, useContext } from "react";
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

  const changeValues = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });

    console.log(values);
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

  // добавление слова
  async function addWords(e) {
    e.preventDefault();

    let response = await fetch("/api/words/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        russian: values.russian,
        english: values.english,
        transcription: values.transcription,
      }),
    });

    let result = await response.json();
    console.log(result);
  }

  return (
    <>
      <h1>Add words you wish to learn</h1>
      <form onSubmit={addWords}>
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
