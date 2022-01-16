import React, { useState } from "react";
import Card from "./Wordcard";
import styles from "./assets/WordcardSlider.module.css";
import { wordsData } from "./words";

function WordcardSlider() {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex(index + 1);
    if (index === wordsData.length - 1) setIndex(0);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
    if (index === 0) setIndex(wordsData.length - 1);
  };

  return (
    <>
      <div className={styles.gallery}>
        <div onClick={prevSlide} className={styles.arrowLeft}></div>
        <div className={styles.slider}>
          {wordsData.map((word, i) => (
            <Card index={index} order={i} key={word.id} {...word}></Card>
          ))}
        </div>
        <div onClick={nextSlide} className={styles.arrowRight}></div>
      </div>
      <div className={styles.slideCount}>
        {index + 1} / {wordsData.length}
      </div>
    </>
  );
}

export default WordcardSlider;
