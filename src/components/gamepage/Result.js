import { Typography, Button } from "@mui/material";
import ResultWrapper from "./ResultWrapper";
import { useContext } from "react";
import { WordleContext } from "../../contexts/WordleContextProvider";

function Result({ toDisplay }) {
  const {
    difficultyState,
    word,
    guessedWord,
    attempts,
    attemptsLimit,
    handleWord,
    setGuessedWord,
    setAttempts,
    isGameOver,
    setIsGameOver,
  } = useContext(WordleContext);
  const { setInputValue, setWarningMessage } = toDisplay;
  const { setGuessHistory } = toDisplay;

  const leftAttempts = attemptsLimit - attempts;

  const onPlayAgain = () => {
    console.log("GameState:" + isGameOver);
    console.log("Play again...");
    handleWord(difficultyState);
    setAttempts(0);
    setInputValue("");
    setGuessedWord("");
    setWarningMessage("");
    setIsGameOver(false);
    setGuessHistory([]);
  };

  if (leftAttempts === 0 && word !== guessedWord && !isGameOver) {
    console.log("Guess lose");
    setIsGameOver(true);
    return (
      <ResultWrapper>
        <Typography variant="h4" color="error">
          Sorry, you lost
        </Typography>
        <Typography variant="h5" color="error">
          The correct word was: <strong>{word}</strong>
        </Typography>
        <Button variant="contained" color="error" onClick={onPlayAgain}>
          Play again
        </Button>
      </ResultWrapper>
    );
  }

  // guessWord and word should not be empty
  if (
    word === guessedWord &&
    word !== "" &&
    guessedWord !== "" &&
    !isGameOver
  ) {
    console.log("Guess win");
    setIsGameOver(true);
    return (
      <ResultWrapper>
        <Typography variant="h4" color="success">
          Congratulations! You won!
        </Typography>
        <Typography variant="h5" color="success">
          You guessed the word <strong>{word}</strong> in{" "}
          <strong>{attempts}</strong> {attempts === 1 ? "attempt" : "attempts"}.
        </Typography>
        <Button variant="contained" color="success" onClick={onPlayAgain}>
          Play again
        </Button>
      </ResultWrapper>
    );
  }
}

export default Result;
