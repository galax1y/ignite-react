import { Toast, ToastProps, ToastProvider } from '@lucas-galaxy-ui/react'
import { StoryObj, Meta } from '@storybook/react'

// configuração global
export default {
  title: "Notifications/Toast",
  component: Toast,
  args: {
    title: 'This is supposed to be a toast',
    description: 'A good toast behaves correctly and does not break inside Storybook'
  },
  decorators: [
    (Story) => {
      return (
        <ToastProvider swipeDirection='right'>
          {Story()}
        </ToastProvider>
      )
    }
  ],
} as Meta<ToastProps>

// variações
export const Primary: StoryObj<ToastProps> = {}
