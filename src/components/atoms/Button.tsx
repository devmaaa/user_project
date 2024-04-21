import React, { PropsWithChildren } from "react";
import styled from "styled-components";

type ButtonProps = {
  primary?: boolean;
  onClick?: () => void;
};

const StyledButton = styled.button.withConfig({
  shouldForwardProp: (prop) => !["primary"].includes(prop),
})<ButtonProps>`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition:
    background-color 0.3s,
    color 0.3s;

  background-color: ${({ theme, primary }) =>
    primary ? theme.colors.button.background : "transparent"};
  color: ${({ theme, primary }) =>
    primary ? theme.colors.button.text : theme.colors.text};

  &:hover {
    background-color: ${({ theme, primary }) =>
      primary ? theme.colors.button.backgroundHover : "lightgray"};
    color: ${({ theme, primary }) =>
      primary ? theme.colors.button.textHover : theme.colors.text};
  }
`;

export const Button = ({
  children,
  primary = false,
  onClick,
}: PropsWithChildren<ButtonProps>) => (
  <StyledButton primary={primary} onClick={onClick}>
    {children}
  </StyledButton>
);

