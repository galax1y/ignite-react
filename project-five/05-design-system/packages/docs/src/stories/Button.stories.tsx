import { Button, ButtonProps } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'
import { ArrowRight } from 'phosphor-react'

// configuração global
export default {
  title: "Form/Button",
  component: Button,
  args: {
    // argumentos padrão
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },

  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },

    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },

    disabled: {
      control: {
        type: 'boolean',
      }
    },

    onClick: {
      action: 'click',
    }
  }
} as Meta<ButtonProps>

// variações
export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  }
}

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  }
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm'
  }
}

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo passo
        <ArrowRight weight='bold' />
      </>)
  }
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  }
}