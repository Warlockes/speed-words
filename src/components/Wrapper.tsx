import React from "react";
import styled from "styled-components";

const AppWrapper = styled.div`
  width: 560px;
  height: 420px;
  background-color: #fff;
  border-radius: 30px;
  box-shadow: 0 10px 14px rgba(0, 0, 0, 0.03);
  margin: 50px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

interface IWrapperProps {
  children: React.ReactNode;
}

export const Wrapper: React.FC<IWrapperProps> = ({
  children,
}: IWrapperProps): React.ReactElement => {
  return <AppWrapper>{children}</AppWrapper>;
};
