import React from "react";

import { Wrapper, Welcome, Game, Result } from "./components";

import "./App.css";

const words = ["Biba", "Slaves", "Key", "Value", "Boba"];

function App() {
  const [isStart, setIsStart] = React.useState(false);
  const [isOver, setIsOver] = React.useState(false);
  const [wordCounter, setWordCounter] = React.useState(0);
  const [currentWord, setCurrentWord] = React.useState("");

  React.useEffect(() => {
    setNewWord();
  }, []);

  const setNewWord = (): void => {
    let word = getRandomWord();
    setCurrentWord(word);
  };

  const getRandomNumber = (min: number, max: number): number => {
    return Math.floor(min + Math.random() * (max - min + 1));
  };

  const getRandomWord = (): string => {
    let index = getRandomNumber(0, words.length - 1);

    return words[index];
  };

  const startGame = (): void => {
    setIsStart(true);
  };

  const tryAgain = (): void => {
    setIsStart(false);
    setIsOver(false);
    setWordCounter(0);
  };

  return (
    <Wrapper>
      {!isStart ? (
        <Welcome startGame={startGame} />
      ) : !isOver ? (
        <Game
          wordCounter={wordCounter}
          setWordCounter={setWordCounter}
          initialTimer={30}
          currentWord={currentWord}
          setNewWord={setNewWord}
          setIsOver={setIsOver}
        />
      ) : (
        <Result
          onTryAgain={tryAgain}
          result={
            wordCounter > 20 ? "excellent" : wordCounter > 15 ? "fine" : "good"
          }
          wordCounter={wordCounter}
        />
      )}
    </Wrapper>
  );
}

export default App;
