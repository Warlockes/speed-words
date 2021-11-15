import React from "react";
import styled from "styled-components";

import { Button } from "./";

const Header = styled.div`
  font-size: 40px;
  font-weight: 900;
  color: #0060ff;
  margin-bottom: 5px;
`;

const HeaderFlag = styled.div`
  text-align: center;
  margin-bottom: 15px;
`;

const Label = styled.div`
  font-weight: 500;
  color: #a9acc3;
  font-size: 20px;
  margin-bottom: 30px;
`;

interface IWelcomeProps {
  startGame(): void;
}

export const Welcome: React.FC<IWelcomeProps> = ({
  startGame,
}: IWelcomeProps): React.ReactElement => {
  return (
    <>
      <Header>
        <HeaderFlag>🏁</HeaderFlag>
        SPEED WORDS
      </Header>
      <Label>Игра на скорость ввода слов</Label>
      <Button onClick={startGame}>🔥 Начать</Button>
    </>
  );
};
