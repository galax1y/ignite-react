import { Avatar, AvatarProps } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Data display/Avatar",
  component: Avatar,
  args: {
    src: 'https://github.com/galax1y.png',
    alt: 'Lucas Galax1y',
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      },
    },
  },
} as Meta<AvatarProps>

// variações
export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  }
}
