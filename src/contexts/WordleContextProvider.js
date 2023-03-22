import { createContext, useState } from "react";

export const WordleContext = createContext();

function WordleContextProvider({ children }) {
  // easy words = 6 letters, 6 attempts, at least 10 words
  const normalWords = [
    "banana",
    "orange",
    "paddle",
    "pencil",
    "window",
    "rabbit",
    "bottle",
    "button",
    "candle",
    "carpet",
    "fellow",
  ];

  // hard words  = 7 letters, 5 attempts
  const hardWords = [
    "garbage",
    "cabbage",
    "bicycle",
    "adoring",
    "buttery",
    "culture",
    "dashing",
    "outdoor",
    "pumpkin",
    "singing",
  ];

  // set the difficulty level state
  // 0 = normal, 1 = hard
  const [difficultyState, setDifficultyState] = useState(0);
  // set the word to be guessed
  const [word, setWord] = useState("");
  // set the current word user guessed
  const [guessedWord, setGuessedWord] = useState("");
  // set the current number of attempts
  const [attempts, setAttempts] = useState(0);
  // set the limit of attempts
  const [attemptsLimit, setAttemptsLimit] = useState(0);
  // set the history of words user guessed
  const [guessHistory, setGuessHistory] = useState([]);
  // set the game over state
  const [isGameOver, setIsGameOver] = useState(false);

  const [isShowedAnswer, setIsShowedAnswer] = useState(false);

  const handleDifficultyState = (difficulty) => {
    if (difficulty === "normal") {
      setDifficultyState(0);
    } else if (difficulty === "hard") {
      setDifficultyState(1);
    }
  };

  // randomly select a word from the list of words
  // how to make sure the word is not the same as the previous word?
  const getRandomWord = (previousWord, wordList) => {
    let newWord = previousWord;
    while (newWord === previousWord) {
      newWord = wordList[Math.floor(Math.random() * wordList.length)];
    }
    return newWord;
  };

  const handleWord = (difficultyState) => {
    if (difficultyState === 0) {
      setWord(getRandomWord(word, normalWords));
      setAttemptsLimit(6);
    } else if (difficultyState === 1) {
      setWord(getRandomWord(word, hardWords));
      setAttemptsLimit(5);
    }
  };

  const valueToShare = {
    difficultyState,
    word,
    guessedWord,
    attempts,
    attemptsLimit,
    guessHistory,
    handleDifficultyState,
    handleWord,
    setGuessedWord,
    setAttempts,
    setGuessHistory,
    setIsGameOver,
    isGameOver,
    isShowedAnswer,
    setIsShowedAnswer,
  };

  return (
    <WordleContext.Provider value={valueToShare}>
      {children}
    </WordleContext.Provider>
  );
}

export default WordleContextProvider;
