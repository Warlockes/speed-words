import React from "react";
import styled from "styled-components";

const StartButton = styled.button`
  width: 210px;
  height: 70px;
  border-radius: 60px;
  background-color: #0060ff;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

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

interface WelcomeProps {
  startGame(): any;
}

export const Welcome: React.FC<WelcomeProps> = ({
  startGame,
}: WelcomeProps) => {
  return (
    <>
      <Header>
        <HeaderFlag>🏁</HeaderFlag>
        SPEED WORDS
      </Header>
      <Label>Игра на скорость ввода слов</Label>
      <StartButton onClick={startGame}>🔥 Начать</StartButton>
    </>
  );
};
