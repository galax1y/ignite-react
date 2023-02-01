import { styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

// Contains all the parts of a tooltip.
export const TooltipContainer = styled(Tooltip.Root, {})

// Must be used as a wrapper for one or more tooltips
export const Provider = styled(Tooltip.Provider, {})

// The button that toggles the tooltip.
export const TooltipTrigger = styled(Tooltip.Trigger, {})

// The component that pops out when the tooltip is open.
export const TooltipContent = styled(Tooltip.Content, {
  padding: '$3 $4',
  borderRadius: 5,

  backgroundColor: '$gray900',
  filter: 'drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  color: '$gray100',

  lineHeight: '$short',
})

// Must be rendered inside Tooltip.Content.
export const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
})
