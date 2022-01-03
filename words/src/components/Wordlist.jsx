import React from "react";
import Word from "./Word";
import styles from "./assets/Wordlist.module.css";

const words = [
  {
    id: "10847",
    english: "butterfly",
    transcription: "[ ˈbʌtəflaɪ ]",
    russian: "бабочка",
    tags: "животные334",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435334"]',
  },
  {
    id: "10848",
    english: "hedgehog",
    transcription: "[ˈhedʒhɔːɡ]",
    russian: "ёжик",
    tags: "лдолдд",
    tags_json: '["u043bu0434u043eu043bu0434u0434"]',
  },
  {
    id: "10853",
    english: "apple",
    transcription: "[ˈæpl]",
    russian: "яблоко",
    tags: "рлоророл",
    tags_json: '["u0440u043bu043eu0440u043eu0440u043eu043b"]',
  },
  {
    id: "10854",
    english: "pear",
    transcription: "[peə]",
    russian: "груша",
    tags: "Array",
    tags_json: "null",
  },
  {
    id: "10862",
    english: "carrot",
    transcription: "[ˈkærət]",
    russian: "морковка",
    tags: "овощи",
    tags_json: '["u043eu0432u043eu0449u0438"]',
  },
  {
    id: "10867",
    english: "plum",
    transcription: "[plʌm]",
    russian: "слива",
    tags: "Array",
    tags_json: "null",
  },
  {
    id: "10872",
    english: "unicorn",
    transcription: "",
    russian: "единорог",
    tags: "Array",
    tags_json: "null",
  },
  {
    id: "10874",
    english: "cat",
    transcription: "[kæt]",
    russian: "кот",
    tags: "животные",
    tags_json: '["u0436u0438u0432u043eu0442u043du044bu0435"]',
  },
  {
    id: "10879",
    english: "butterfly",
    transcription: "[ˈyo͞onəˌkôrn]",
    russian: "бабочка",
    tags: "сказка",
    tags_json: '["u0441u043au0430u0437u043au0430"]',
  },
];

function Wordlist() {
  return (
    <React.Fragment>
      <h1>Your words</h1>
      <table className={styles.table}>
        <tr className={styles.tableRow}>
          <th>Russian</th>
          <th>English</th>
          <th>Transcription</th>
          <th></th>
        </tr>

        <Word edit></Word>
        {words.map((word) => (
          <Word {...word}></Word>
        ))}
      </table>
    </React.Fragment>
  );
}

export default Wordlist;
