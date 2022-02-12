import React, { useState, useEffect } from "react";
import styles from "./assets/Input.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Input(props) {
  const [error, setError] = useState(false);

  // валидация формы
  function inputValidate(inputValue) {
    if (props.onValidate && !props.onValidate(inputValue)) {
      setError(true);
      props.addErrors();
    } else {
      setError(false);
      props.deleteErrors();
    }
  }

  // изменить значения инпута, валидация формы, отключение кнопки Сохранить
  const onInputChange = (e) => {
    inputValidate(e.target.value);
    props.changeValues(e);
    props.checkErrors();
  };

  // добавить рамку у инпута при ошибке
  let inputStyle = cx("input", {
    error: error,
  });

  return (
    <input
      value={props.value}
      name={props.name}
      onChange={onInputChange}
      className={inputStyle}
    ></input>
  );
}

export default Input;
