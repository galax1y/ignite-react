import { Text, TextProps } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Typography/Text",
  component: Text,
  args: {
    size: 'md',
    children: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit sunt dignissimos, dolores voluptatibus officiis, amet ullam deserunt illo ipsam sed aliquam suscipit neque ea, possimus aliquid labore? Repellendus, inventore ratione.'
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: 'inline-radio',
    },
  },
} as Meta<TextProps>

// variações
export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  }
}