import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./assets/Wordcard.module.css";

let cx = classNames.bind(styles);

function Card(props) {
  const [side, setSide] = useState(front);

  const changeSide = () => {
    setSide(!front);
  };

  let cardStyles = cx("card", {
    front: front,
    back: !front,
  });

  return (
    <div className={cardStyles} side={side} onClick={changeSide}>
      <div className={styles.english}>{props.english}</div>
      {props.front ? (
        <div className={styles.transcription}>{props.transcription}</div>
      ) : (
        <div className={styles.russian}>{props.russian}</div>
      )}
    </div>
  );
}

export default Card;
