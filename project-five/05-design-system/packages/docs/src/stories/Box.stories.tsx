import { Box, BoxProps, Text } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Surfaces/Box",
  component: Box,
  args: {
    children: (
      <Text>Testando box</Text>
    )
  },
  argTypes: {
    children: {
      control: {
        type: 'null',
      }
    }
  }
} as Meta<BoxProps>

// variações
export const Primary: StoryObj<BoxProps> = {
  args: {},
}