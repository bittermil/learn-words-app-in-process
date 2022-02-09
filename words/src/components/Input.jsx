import React, { useState, useEffect } from "react";
import styles from "./assets/Input.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Input(props) {
  const [error, setError] = useState(false);

  const validate = (e) => {
    if (!e.target.value) setError(true);
    if (e.target.value) setError(false);
  };

  const onInputChange = (e) => {
    validate(e);
    props.changeValues(e);
  };

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
