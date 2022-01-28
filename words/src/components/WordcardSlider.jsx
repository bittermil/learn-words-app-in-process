import React, { useState } from "react";
import Card from "./Wordcard";
import styles from "./assets/WordcardSlider.module.css";
import { wordsData } from "./words";

function WordcardSlider() {
  const [index, setIndex] = useState(0);
  const [learnedCount, setCount] = useState(0);

  // изменить число выученных слов
  const updateCount = () => {
    setCount(learnedCount + 1);
  };

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
      {(wordsData.length && (
        <>
          <div className={styles.title}>
            Swipe cards to practice, click a card to see a translation
          </div>
          <div className={styles.gallery}>
            <div onClick={prevSlide} className={styles.arrowLeft}></div>
            <div className={styles.slider}>
              {wordsData.map((word, i) => (
                <Card
                  callbackFromParent={updateCount}
                  index={index}
                  order={i}
                  key={word.id}
                  {...word}
                ></Card>
              ))}
            </div>
            <div onClick={nextSlide} className={styles.arrowRight}></div>
          </div>
          <div className={styles.slideCount}>
            {index + 1} / {wordsData.length}
          </div>

          <div className={styles.learnedCount}>
            Today you've already learned <span>{learnedCount}</span>. Keep
            going!
          </div>
        </>
      )) || <div>Looks like we found no words yet!</div>}
    </>
  );
}

export default WordcardSlider;
