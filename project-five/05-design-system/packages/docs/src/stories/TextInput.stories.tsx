import { Box, Text, TextInput, TextInputProps } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Form/TextInput",
  component: TextInput,
  args: {},
  decorators: [ // propriedade pra colocar o componente em contexto, ex.: dentro de algum container
    (Story) => {
      return (
        <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$2' }}>
          <Text>This is a Text inside a Box as label, and down here we have a TextInput</Text>
          {Story()} {/* O nosso componente é 'summonado' aqui */}
        </Box>
      )
    }
  ],
} as Meta<TextInputProps>

// variações
export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name'
  }
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true
  }
}


export const WithPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/'
  }
}