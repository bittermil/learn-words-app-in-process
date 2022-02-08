import React, { useState, useEffect } from "react";
import styles from "./assets/Input.module.css";
import classNames from "classnames/bind";

let cx = classNames.bind(styles);

function Input(props) {
  let inputStyle = cx("input", {
    error: error,
  });

  return (
    <input
      value={props.value}
      name={props.name}
      onChange={() => {
        props.onChange();
        props.validate();
      }}
      className={inputStyle}
    ></input>
  );
}

export default Input;
