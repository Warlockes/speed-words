import React from "react";

import { Welcome } from "./components/Welcome";
import { Wrapper } from "./components/Wrapper";

import "./App.css";

function App() {
  const [isStart, setIsStart] = React.useState(false);

  const startGame = () => {
    setIsStart(true);
  };

  return <Wrapper>{!isStart && <Welcome startGame={startGame} />}</Wrapper>;
}

export default App;
