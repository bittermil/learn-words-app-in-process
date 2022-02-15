import React, { useState, useRef } from "react";
import Card from "./Wordcard";
import styles from "./assets/WordcardSlider.module.css";
import { useWordAPI } from "./contexts/WordsContextProvider";

function WordcardSlider() {
  const { words, isLoading } = useWordAPI();
  const [index, setIndex] = useState(0);
  const [learnedCount, setCount] = useState(0);
  const [learned, setState] = useState(new Set());
  const [flipped, setSide] = useState(false);

  const buttonEl = useRef(null);

  const onButtonClick = () => {
    buttonEl.current.focus();
  };

  // изменить число выученных слов
  const updateCount = () => {
    if (learned.has(index) === false) setCount(learnedCount + 1);
  };

  // добавить index слова в set выученных
  const updateLearned = () => {
    setState(new Set([...learned, index]));
  };

  // переворачивать карточку
  const onCardToggle = () => {
    setSide(!flipped);
    !flipped && updateCount();
    updateLearned();
  };

  const nextSlide = () => {
    setIndex(index + 1);
    if (index === words.length - 1) setIndex(0);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
    if (index === 0) setIndex(words.length - 1);
  };

  return (
    <>
      {(!isLoading && (
        <>
          <div className={styles.title}>
            Swipe cards to practice, click a card to see a translation
          </div>
          <div className={styles.gallery}>
            <button onClick={prevSlide} className={styles.arrowLeft}></button>
            <div className={styles.slider}>
              {words.map((word, i) => (
                <Card
                  flipped={flipped}
                  callbackOnCardToggle={onCardToggle}
                  callbackOnButtonClick={onButtonClick}
                  index={index}
                  order={i}
                  key={word.id}
                  {...word}
                ></Card>
              ))}
            </div>
            <button
              ref={buttonEl}
              onClick={nextSlide}
              className={styles.arrowRight}
            ></button>
          </div>
          <div className={styles.slideCount}>
            {index + 1} / {words.length}
          </div>

          <div className={styles.learnedCount}>
            Today you've already learned <span>{learnedCount}</span> words. Keep
            going!
          </div>
        </>
      )) || <div>Looks like we found no words yet!</div>}
    </>
  );
}

export default WordcardSlider;
