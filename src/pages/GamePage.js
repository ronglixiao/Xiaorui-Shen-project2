import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { WordleContext } from "../contexts/WordleContextProvider";
import Display from "../components/gamepage/Display";
import { Box } from "@mui/system";
import { TextField, Stack, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import Result from "../components/gamepage/Result";
import { useLocation } from "react-router-dom";
import StyledLetter from "../components/gamepage/StyledLetter";

function GamePage() {
  const location = useLocation();
  const [inputValue, setInputValue] = useState("");
  const [isValidInput, setIsValidInput] = useState(false);
  const [warningMessage, setWarningMessage] = useState("");

  const { difficulty } = useParams();
  const {
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
    isGameOver,
    setIsGameOver,
    isShowedAnswer,
    setIsShowedAnswer,
  } = useContext(WordleContext);

  useEffect(() => {
    handleDifficultyState(difficulty);
    handleWord(difficultyState);
    setGuessedWord("");
    setAttempts(0);
    setIsGameOver(false);
    setGuessHistory([]);

    return () => {
      setGuessedWord("");
      setAttempts(0);
      setIsGameOver(false);
      setGuessHistory([]);
    };
  }, []);

  useEffect(() => {
    handleDifficultyState(difficulty);
    handleWord(difficultyState);
    setGuessedWord("");
    setAttempts(0);
    setIsGameOver(false);
    setGuessHistory([]);
  }, [location]);

  useEffect(() => {
    handleDifficultyState(difficulty);
    handleWord(difficultyState);
  }, [difficulty, difficultyState]);

  const toDisplay = {
    word,
    guessedWord,
    attemptsLimit,
    attempts,
    warningMessage,
    inputValue,
    difficulty,
    guessHistory,
    setWarningMessage,
    setInputValue,
    setGuessHistory,
  };

  toDisplay.guessHistory = guessHistory.map((guess, index) => (
    <Box key={index}>{guess()}</Box>
  ));

  const letterEelements = (guessedWord, word) => {
    const letters = guessedWord.split("");

    // TODO: refactor this
    const indices = [...word]
      .map((letter, index) => (letter === guessedWord[index] ? index : -1))
      .filter((i) => i !== -1);
    return (
      <Box display="flex">
        {letters.map((letter, index) => {
          const color = indices.includes(index)
            ? "#6aa964" // correct letter in the correct position
            : word.includes(letter)
            ? "#c9b458" // correct letter in the wrong position
            : "#787c7e"; // wrong letter

          return (
            <StyledLetter key={index} color={color}>
              {letter.toUpperCase()}
            </StyledLetter>
          );
        })}
      </Box>
    );
  };

  const handleInputChange = (e) => {
    e.preventDefault();
    const currValue = e.target.value;
    const validInputRegex = /^[a-zA-Z]+$/;
    let warningMessage = "";
    setInputValue(e.target.value);
    setIsValidInput(true);

    // check if the input contains only letters
    if (!validInputRegex.test(currValue)) {
      setIsValidInput(false);
      warningMessage = "Please input only letters";
    }

    // check if the input length is valid for the selected difficulty
    if (difficultyState === 0) {
      if (currValue.length !== 6) {
        setIsValidInput(false);
        warningMessage = "Please input a word with 6 letters";
      }
    } else if (difficultyState === 1) {
      if (currValue.length !== 7) {
        setIsValidInput(false);
        warningMessage = "Please input a word with 7 letters";
      }
    }

    setWarningMessage(warningMessage);
    if (inputValue.length === 0) {
      setWarningMessage("");
    }
  };

  const handleSubmit = () => {
    // check if the input is valid
    console.log("Submit the game...");
    if (
      isValidInput &&
      inputValue.length > 0 &&
      attempts < attemptsLimit &&
      !isGameOver
    ) {
      setGuessedWord(inputValue);
      setInputValue("");
      setAttempts(attempts + 1);
    }
  };

  useEffect(() => {
    setGuessHistory([
      ...guessHistory,
      () => letterEelements(guessedWord, word),
    ]);
  }, [guessedWord]);

  const handleReset = (difficultyState) => {
    //handleDifficultyState(difficultyState);
    console.log("Reset the game...");
    handleWord(difficultyState);
    setAttempts(0);
    setInputValue("");
    setGuessedWord("");
    setWarningMessage("");
    setIsGameOver(false);
    setGuessHistory([]);
  };

  const handleIsShowedAnswer = () => {
    setIsShowedAnswer(!isShowedAnswer);
  };

  // TODO: refactor this
  return (
    <>
      <Wrapper elevation={3}>
        <Box component="from">
          <p>
            Please input your guessword:
            {difficultyState === 0
              ? " (6-length letters)"
              : " (7-length letters)"}
          </p>
          <div>
            <TextField
              required
              id="outlined-basic"
              variant="outlined"
              value={inputValue}
              onChange={handleInputChange}
            ></TextField>
          </div>
          <>
            {warningMessage && (
              <Typography variant="caption" color="error">
                {warningMessage}
              </Typography>
            )}
          </>
          <br />
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleSubmit}>
              Submit
            </Button>
            <Button
              variant="outlined"
              onClick={() => handleReset(difficultyState)}
            >
              Reset
            </Button>
            <Link to="/">
              <Button variant="outlined">Go Home</Button>
            </Link>
            <Button variant="outlined" onClick={() => handleIsShowedAnswer()}>
              Show Answer
            </Button>
          </Stack>
        </Box>
      </Wrapper>
      <Display toDisplay={toDisplay} />
      <Result toDisplay={toDisplay} handleReset={handleReset} />
    </>
  );
}

export default GamePage;
