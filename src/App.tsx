import React from "react";

import { Wrapper, Welcome, Game, Result } from "./components";

import { words } from "./words";

import "./App.css";

function App() {
  const [isStart, setIsStart] = React.useState(false);
  const [isOver, setIsOver] = React.useState(false);
  const [gameTimer, setGameTimer] = React.useState(60);
  const [wordCounter, setWordCounter] = React.useState(0);
  const [currentWord, setCurrentWord] = React.useState("");

  const getRandomWord = React.useCallback((): string => {
    let index = (Math.random() * words.length) | 0;

    return words[index];
  }, []);

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
      ) : // ) : true ? (
      //   <Welcome startGame={startGame} /> Написать логику выбора времени игры
      !isOver ? (
        <Game
          wordCounter={wordCounter}
          setWordCounter={setWordCounter}
          initialTimer={gameTimer}
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
          gameTimer={gameTimer}
        />
      )}
    </Wrapper>
  );
}

export default App;
