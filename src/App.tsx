import React from "react";

import { Wrapper, Welcome, Game, Result } from "./components";

import { words } from "./words";

import "./App.css";

function App() {
  const [isStart, setIsStart] = React.useState(false);
  const [isOver, setIsOver] = React.useState(false);
  const [wordCounter, setWordCounter] = React.useState(0);
  const [currentWord, setCurrentWord] = React.useState("");

  const getRandomNumber = React.useCallback(
    (min: number, max: number): number => {
      return Math.floor(min + Math.random() * (max - min + 1));
    },
    []
  );

  const getRandomWord = React.useCallback((): string => {
    let index = getRandomNumber(0, words.length - 1);
    return words[index];
  }, [getRandomNumber]);

  const setNewWord = React.useCallback((): void => {
    let word = getRandomWord();
    setCurrentWord(word);
  }, [getRandomWord]);

  React.useEffect(() => {
    setNewWord();
  }, [setNewWord]);

  const startGame = (): void => {
    setIsStart(true);
  };

  const tryAgain = (): void => {
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
          initialTimer={60}
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
