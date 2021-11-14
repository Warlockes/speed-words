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
  secondary?: boolean;
}

const StatisticCounter = styled.div<StatisticCounterProps>`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: 900;
  color: ${(props) => (props.secondary ? "#55bd55" : "#44a0ff")};
  text-align: center;
`;

interface GameProps {
  wordCounter: number;
  initialTimer: number;
  currentWord: string;
  setWordCounter(state: number): void;
  setNewWord(): void;
  setIsOver(state: boolean): void;
}

export const Game: React.FC<GameProps> = ({
  wordCounter,
  initialTimer,
  currentWord,
  setWordCounter,
  setNewWord,
  setIsOver,
}: GameProps): React.ReactElement => {
  const [timer, setTimer] = React.useState(initialTimer);
  const [inputValue, setInputValue] = React.useState("");
  const inputRef = React.useRef<HTMLInputElement>(null);

  React.useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  React.useEffect(() => {
    if (timer === 0) {
      setIsOver(true);
    }
  }, [timer]);

  React.useEffect(() => {
    const timerId = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => clearInterval(timerId);
  }, [timer]);

  const onChangeInput = (event: React.FormEvent<HTMLInputElement>): void => {
    setInputValue(event.currentTarget.value);
    if (event.currentTarget.value === currentWord) {
      setTimeout(() => onCorrectInput(), 200);
    }
  };

  const checkWord = (): boolean => {
    if (inputValue.length === currentWord.length) {
      return inputValue !== currentWord;
    }
    return false;
  };

  const onCorrectInput = (): void => {
    setWordCounter(wordCounter + 1);
    setInputValue("");
    setNewWord();
  };

  return (
    <>
      <Label>Введите слово:</Label>
      <Word>{currentWord}</Word>
      <Input
        ref={inputRef}
        value={inputValue}
        onChange={onChangeInput}
        error={checkWord()}
      />
      <StatisticRow>
        <div>
          <StatisticLabel>Осталось времени:</StatisticLabel>
          <StatisticCounter>{timer} сек.</StatisticCounter>
        </div>
        <div>
          <StatisticLabel>Введено слов:</StatisticLabel>
          <StatisticCounter secondary>{wordCounter}</StatisticCounter>
        </div>
      </StatisticRow>
    </>
  );
};
