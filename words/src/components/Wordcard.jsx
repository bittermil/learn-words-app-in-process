import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./assets/Wordcard.module.css";

let cx = classNames.bind(styles);

function Card(props) {
  const [isBack, setSide] = useState("false");

  const changeSide = () => {
    setSide(!isBack);
  };

  let cardStyle = cx("card", {
    front: !isBack,
    back: isBack,
  });

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardFlip}>
        <div className={cardStyle} onClick={changeSide}>
          <div className={styles.english}>{props.english}</div>
          {isBack ? (
            <div className={styles.transcription}>{props.transcription}</div>
          ) : (
            <div className={styles.russian}>{props.russian}</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Card;
