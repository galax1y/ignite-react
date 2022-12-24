import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'success' | 'danger'

interface ButtonContainerProps {
  variant: ButtonVariant
}

const buttonVariants = {
  primary: 'black',
  secondary: 'blue',
  success: 'green',
  danger: 'red',
}

// Isso é um componente, recebe props.
export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  background-color: ${(props) => props.theme['green-500']};
  color: ${(props) => props.theme.white};
  /*${(props) => {
    // template literals escrevendo CSS
    return css`
      background-color: ${buttonVariants[props.variant]};
    `
  }}*/
`
