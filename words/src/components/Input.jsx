import React, { useState, useEffect } from "react";
import styles from "./assets/Input.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Input(props) {
  const [error, setError] = useState(false);

  const validate = (e) => {
    if (!e.target.value) setError(true);
    if (e.target.value) setError(false);
    if (error) props.saveOff();
    console.log("error", error);
  };

  const onInputChange = (e) => {
    validate(e);
    props.changeValues(e);
  };

  let inputStyle = cx("input", {
    error: error,
  });

  useEffect(() => {
    console.log(1);
    //props.saveOff();
  }, [error]);

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
