import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { Box } from "@mui/system";
import Wrapper from "../components/Wrapper";
import StyledLetter from "../components/gamepage/StyledLetter";

function RulesPage() {
  const exampleWord = "Allows";
  const exampleLetters = exampleWord.split("");

  const letterEelements = (
    <Box display="flex">
      {exampleLetters.map((letter, index) => {
        const color =
          index === 2
            ? "#6aa964" // correct letter in the correct position
            : index === 1 || index === 3 || index === 4
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

  return (
    <div>
      <Wrapper elevation={3}>
        <Typography variant="h4" align="center">
          Wordle Rules
        </Typography>
        <Typography variant="body1">
          Welcome to Wordle! Wordle is a guessing game where you have to guess a
          secret word within a certain number of attempts. The game difficulty
          determines the number of attempts and the length of the word.
        </Typography>
        <Typography variant="h5" align="center">
          Gameplay
        </Typography>
        <Typography variant="body1">
          To play, input a word and receive feedback based on the location of
          the letters in the word.
        </Typography>

        <ul>
          <Typography variant="subtitle1" gutterBottom>
            If a letter is in the correct spot, it's background would be
            <span style={{ fontWeight: "bold" }}> green</span>.
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            If a letter is in the word but not in the correct spot, it's
            background would be
            <span style={{ fontWeight: "bold" }}> yellow</span>
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            If a letter is not in the word, it's background would be
            <span style={{ fontWeight: "bold" }}> gray</span>.
          </Typography>
        </ul>

        <Typography variant="body1">
          For instance, say the correct word is
          <span style={{ fontWeight: "bold" }}> “fellow” </span> but the user
          submits <span style={{ fontWeight: "bold" }}> “allows” </span>, then
          you show:
        </Typography>

        <div>{letterEelements}</div>

        <Typography variant="h5" align="center">
          Difficulty Levels
        </Typography>

        <Typography variant="body1">
          There are two difficulty levels:
        </Typography>
        <ul>
          <Typography variant="subtitle1" gutterBottom>
            Normal: A 6-letter word with 6 attempts to guess
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Hard: A 7-letter word with 5 attempts to guess
          </Typography>
        </ul>
        <Typography variant="button" align="center">
          Good luck and have fun!
        </Typography>
        <br />
        <Box align="center">
          <Link to="/">
            <Button variant="outlined">Go Home</Button>
          </Link>
        </Box>
      </Wrapper>
    </div>
  );
}

export default RulesPage;
