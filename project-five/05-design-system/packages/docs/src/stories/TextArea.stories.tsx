import { Box, Text, TextArea, TextAreaProps } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Form/TextArea",
  component: TextArea,
  args: {},
  decorators: [
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text size={'sm'}>This is a Text inside a Box as label, containing a TextArea</Text>
          {Story()}
        </Box>
      )
    }
  ],
} as Meta<TextAreaProps>

// variações
export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'This placeholder is inside a TextArea component'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true
  }
}
