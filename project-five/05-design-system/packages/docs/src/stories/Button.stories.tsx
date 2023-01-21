import { Button, ButtonProps } from '@galaxy-ui/react'
import {StoryObj, Meta} from '@storybook/react'

// configuração global
export default {
  title: "Button",
  component: Button,

  args: {
    children: 'Enviar',
  }
} as Meta<ButtonProps>


// variações
export const Primary: StoryObj<ButtonProps> = {
  args: {
    size: 'small',
  },
}

export const Big: StoryObj<ButtonProps> = {
  args: {
    size: 'big',
  }
}