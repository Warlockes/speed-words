import React from "react";
import styled from "styled-components";

import { Button } from "./";

const HeaderEmoji = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 64px;
  margin-bottom: 25px;
`;

const Label = styled.div`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  color: #3e3e3e;
  margin-bottom: 10px;
`;

const ResultCount = styled.div<{ color: string }>`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 48px;
  margin-bottom: 28px;
  color: ${(props) => props.color};
`;

const results: { [key: string]: any } = {
  excellent: {
    emoji: "🔥",
    label: "Воу!",
    color: "#FF7E36",
  },
  fine: {
    emoji: "😎",
    label: "Молодец!",
    color: "#EEBE42",
  },
  good: {
    emoji: "😓",
    label: "Неплохо!",
    color: "#373737",
  },
};

const textForms: Array<string> = ["слово", "слова", "слов"];

interface IResultProps {
  result: string;
  wordCounter: number;
  gameTimer: number;
  onTryAgain(): void;
}

export const Result: React.FC<IResultProps> = ({
  result,
  wordCounter,
  gameTimer,
  onTryAgain,
}: IResultProps): React.ReactElement => {
  const selectedResult = results[result];

  const getCorrectCaseCounter = (): string => {
    return `${wordCounter} ${
      textForms[
        wordCounter % 100 > 4 && wordCounter % 100 < 20
          ? 2
          : [2, 0, 1, 1, 1, 2][
              wordCounter % 10 < 5 ? Math.abs(wordCounter) % 10 : 5
            ]
      ]
    }`;
  };

  const resultCounter: string = getCorrectCaseCounter();

  return (
    <>
      <HeaderEmoji>{selectedResult?.emoji}</HeaderEmoji>
      <Label>
        {selectedResult?.label} За <strong>{gameTimer} секунд</strong>, ты ввел:
      </Label>
      <ResultCount color={selectedResult?.color}>{resultCounter}</ResultCount>
      <Button onClick={onTryAgain}>🤔 Попробовать снова?</Button>
    </>
  );
};
