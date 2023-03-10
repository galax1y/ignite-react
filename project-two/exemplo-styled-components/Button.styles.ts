import styled from "styled-components";

export type ButtonVariant = "primary" | "secondary" | "success" | "danger";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: "black",
  secondary: "blue",
  success: "green",
  danger: "red",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  color: white;
  ${(props) => {
    return `background-color: ${buttonVariants[props.variant]}`;
  }}
`;
