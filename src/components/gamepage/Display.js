import { Box } from "@mui/system";
import Wrapper from "../Wrapper";
import DisplayRow from "./DisplayRow";
import DisplayCol from "./DisplayCol";
//import StyledLetter from "./StyledLetter";

function Display({ toDisplay }) {
  const { word, guessedWord } = toDisplay;
  const { attemptsLimit, attempts } = toDisplay;
  const { guessHistory } = toDisplay;

  // const letters = guessedWord.split("");

  // const indices = [...word]
  //   .map((letter, index) => (letter === guessedWord[index] ? index : -1))
  //   .filter((i) => i !== -1);

  // const letterEelements = (
  //   <Box display="flex">
  //     {letters.map((letter, index) => {
  //       const color = indices.includes(index)
  //         ? "#6aa964" // correct letter in the correct position
  //         : word.includes(letter)
  //         ? "#c9b458" // correct letter in the wrong position
  //         : "#787c7e"; // wrong letter

  //       return (
  //         <StyledLetter key={index} color={color}>
  //           {letter.toUpperCase()}
  //         </StyledLetter>
  //       );
  //     })}
  //   </Box>
  // );

  return (
    <Wrapper elevation={3}>
      <DisplayRow>
        <DisplayCol>
          <p>Difficulty:</p>
          <h3>{toDisplay.difficulty}</h3>
        </DisplayCol>
        {/* <DisplayCol>
          <p>Word:</p>
          <h3>{word}</h3>
        </DisplayCol> */}
        <DisplayCol>
          <p>Left attemps:</p>
          <h3>{attemptsLimit - attempts}</h3>
        </DisplayCol>
      </DisplayRow>
      <DisplayRow>Your guessed words:</DisplayRow>
      <DisplayRow>
        <DisplayCol>
          <div>{toDisplay.guessHistory}</div>
        </DisplayCol>
      </DisplayRow>
    </Wrapper>
  );
}

export default Display;
