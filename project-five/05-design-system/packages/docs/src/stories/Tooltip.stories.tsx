import { Box, Text, TooltipProvider, Tooltip, TooltipProps } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Notifications/Tooltip",
  component: Tooltip,
  args: {
    children:
      // tooltip will appear on the outermost child component
      <Box>
        <Text>This element triggers the tooltip</Text>
      </Box>,
    content:
      // currently only supports strings
      'Tooltip content here.'
  },
  decorators: [
    (Story) => {
      return (
        <TooltipProvider>
          {Story()}
        </TooltipProvider>
      )
    }
  ],
} as Meta<TooltipProps>

// variações
export const Primary: StoryObj<TooltipProps> = {}
