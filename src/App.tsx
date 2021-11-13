import React from "react";

import { Wrapper, Welcome, Game, Result } from "./components";

import "./App.css";

function App() {
  const [isStart, setIsStart] = React.useState(false);

  const startGame = () => {
    setIsStart(true);
  };

  const tryAgain = () => {
    setIsStart(false);
  };

  return (
    <Wrapper>
      {!isStart ? (
        <Welcome startGame={startGame} />
      ) : (
        <Result onTryAgain={tryAgain} result="good" />
      )}
    </Wrapper>
  );
}

export default App;
