import React from "react";
import styled from "styled-components";

const Label = styled.div`
  font-size: 24px;
  color: #d3d4da;
  font-weight: 500;
  margin-bottom: 17px;
`;

const Word = styled.div`
  font-weight: 900;
  color: #42497b;
  font-size: 40px;
  margin-bottom: 26px;
`;

interface InputProps {
  error?: boolean;
}

const Input = styled.input<InputProps>`
  min-width: 300px;
  height: 65px;
  border-radius: 20px;
  border: 1px solid #f9f4ed;
  font-size: 28px;
  text-align: center;
  background-color: ${(props) => (props.error ? "#FFFBFB" : "#fff")};
  color: ${(props) => (props.error ? "#ea5837" : "#42497b")};
  margin-bottom: 35px;
  &:focus-visible {
    border: 2px solid ${(props) => (props.error ? "#ea5837" : "#42497b")};
  }
`;

const StatisticRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 380px;
`;

const StatisticLabel = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
`;

interface StatisticCounterProps {
  wordCount?: boolean;
}

const StatisticCounter = styled.div<StatisticCounterProps>`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => (props.wordCount ? "#55bd55" : "#44a0ff")};
  text-align: center;
`;

export const Game = () => {
  return (
    <>
      <Label>Введите слово:</Label>
      <Word>Slaves</Word>
      <Input />
      <StatisticRow>
        <div>
          <StatisticLabel>Осталось времени:</StatisticLabel>
          <StatisticCounter>12 сек.</StatisticCounter>
        </div>
        <div>
          <StatisticLabel>Введено слов:</StatisticLabel>
          <StatisticCounter wordCount>6</StatisticCounter>
        </div>
      </StatisticRow>
    </>
  );
};
