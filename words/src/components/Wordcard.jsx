import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./assets/Wordcard.module.css";

let cx = classNames.bind(styles);

function Card(props) {
  const [flipped, setSide] = useState("false");
  console.log(props);

  const toggleClass = () => {
    setSide(!flipped);
  };

  let cardStyle = cx("card", {
    flipped: flipped,
  });

  let isCardDisplay = cx("container", {
    active: props.order === props.index,
  });

  return (
    <div className={isCardDisplay}>
      <div className={cardStyle} onClick={toggleClass}>
        <div className={styles.front}>
          <div className={styles.english}>{props.english}</div>
          <div className={styles.transcription}>{props.transcription}</div>
        </div>
        <div className={styles.back}>
          <div className={styles.english}>{props.english}</div>
          <div className={styles.russian}>{props.russian}</div>
        </div>
      </div>
    </div>
  );
}

export default Card;
