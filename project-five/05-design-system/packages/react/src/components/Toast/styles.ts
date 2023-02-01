import { styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Root, {
  maxWidth: 360,
  minHeight: 82,
  backgroundColor: '$gray800',

  border: '1px solid $gray600',
  boxSizing: 'border-box',

  fontFamily: '$default',
  padding: '$3 $5',
  borderRadius: '$sm',
  listStyleType: 'none',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '&:focus': {
    borderColor: '$gray200',
  },

  '&:hover': {
    borderColor: '$gray200',
  },
})

export const ToastHeader = styled(Toast.Title, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastTitle = styled('h1', {
  margin: 0,
  fontSize: '$xl',
  fontWeight: '$bold',
  color: '$white',
  lineHeight: '$base',
})

export const ToastDescription = styled(Toast.Description, {
  fontSize: '$sm',
  fontWeight: '$regular',
  color: '$gray200',
})

export const ToastClose = styled(Toast.Close, {
  all: 'unset',
  width: '$5',
  height: '$5',
  cursor: 'pointer',
  color: '$gray200',
})

export const ToastViewport = styled(Toast.Viewport, {})

export const Provider = styled(Toast.Provider, {})
