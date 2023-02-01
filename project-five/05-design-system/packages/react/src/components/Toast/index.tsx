import { ComponentProps } from 'react'
import {
  ToastContainer,
  ToastTitle,
  ToastHeader,
  Provider,
  ToastDescription,
  ToastViewport,
  ToastClose,
} from './styles'
import { X } from 'phosphor-react'

// prettier-ignore
export interface ToastProps extends ComponentProps<typeof ToastContainer> {
  title: string
  description: string
}

export function Toast({ ...props }: ToastProps) {
  return (
    <ToastContainer className="ToastRoot">
      <ToastHeader>
        <ToastTitle>{props.title}</ToastTitle>
        <ToastClose aria-label="close">
          <X size={20} />
        </ToastClose>
      </ToastHeader>

      <ToastDescription>{props.description}</ToastDescription>
    </ToastContainer>
  )
}

// prettier-ignore
interface ToastProviderProps extends ComponentProps<typeof Provider> { }

export function ToastProvider({ children }: ToastProviderProps) {
  return (
    <Provider>
      {children}
      <ToastViewport />
    </Provider>
  )
}

Toast.displayName = 'Toast'
