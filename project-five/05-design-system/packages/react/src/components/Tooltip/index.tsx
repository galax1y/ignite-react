import { ComponentProps } from 'react'
import {
  TooltipArrow,
  TooltipContainer,
  TooltipContent,
  Provider,
  TooltipTrigger,
} from './styles'

export interface TooltipProviderProps extends ComponentProps<typeof Provider> {}

// Provider to wrap one/multiple tooltips
export function TooltipProvider({ children }: TooltipProviderProps) {
  return (
    <Provider delayDuration={300} skipDelayDuration={150}>
      {children}
    </Provider>
  )
}

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {
  content: string
}

export function Tooltip({ children, content }: TooltipProps) {
  return (
    <TooltipContainer>
      {/* TooltipTrigger asChild adds Tooltip trigger to children element */}
      <TooltipTrigger asChild>{children}</TooltipTrigger>
      <TooltipContent avoidCollisions={false} side="top">
        {content}
        <TooltipArrow width={16} height={8} />
      </TooltipContent>
    </TooltipContainer>
  )
}

Tooltip.displayName = 'Tooltip'
