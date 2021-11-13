import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  min-width: 210px;
  padding: 20px 35px;
  border-radius: 60px;
  background-color: #0060ff;
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  cursor: pointer;
`;

interface ButtonProps {
  onClick(): void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
}: ButtonProps): React.ReactElement => {
  return <Btn onClick={onClick}>{children}</Btn>;
};
