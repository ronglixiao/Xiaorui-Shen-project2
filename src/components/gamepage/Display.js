import { Box } from "@mui/system";
import Wrapper from "../Wrapper";
import DisplayRow from "./DisplayRow";
import DisplayCol from "./DisplayCol";
import { useContext } from "react";
import { WordleContext } from "../../contexts/WordleContextProvider";

function Display({ toDisplay }) {
  const { word, guessedWord } = toDisplay;
  const { attemptsLimit, attempts } = toDisplay;
  const { guessHistory } = toDisplay;
  const { isShowedAnswer } = useContext(WordleContext);

  const Answer = () => {
    if (isShowedAnswer) {
      return (
        <DisplayCol>
          <p>Answer:</p>
          <h3>{word}</h3>
        </DisplayCol>
      );
    } else {
      return null;
    }
  };

  return (
    <Wrapper elevation={3}>
      <DisplayRow>
        <DisplayCol>
          <p>Difficulty:</p>
          <h3>{toDisplay.difficulty}</h3>
        </DisplayCol>
        {Answer()}
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
