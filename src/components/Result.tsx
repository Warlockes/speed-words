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

interface ResultCountProps {
  color: string;
}

const ResultCount = styled.div<ResultCountProps>`
  font-family: "Roboto", sans-serif;
  font-weight: 900;
  font-size: 48px;
  margin-bottom: 28px;
  color: ${(props) => props.color};
`;

interface ResultsObj {
  [key: string]: any;
}

const results: ResultsObj = {
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

interface ResultProps {
  result: string;
  onTryAgain(): void;
}

export const Result: React.FC<ResultProps> = ({
  result,
  onTryAgain,
}: ResultProps): React.ReactElement => {
  const selectedResult = results[result];

  return (
    <>
      <HeaderEmoji>{selectedResult?.emoji}</HeaderEmoji>
      <Label>
        {selectedResult?.label} За <strong>18 секунд</strong>, ты ввел:
      </Label>
      <ResultCount color={selectedResult?.color}>16 слов</ResultCount>
      <Button onClick={onTryAgain}>🤔 Попробовать снова?</Button>
    </>
  );
};
