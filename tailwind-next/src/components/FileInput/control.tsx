'use client'

import { ComponentProps } from 'react'
import { useFileInput } from './root'

type ControlProps = ComponentProps<'input'>

export function Control(props: ControlProps) {
  const { id } = useFileInput()

  return <input id={id} type="file" className="sr-only" {...props} />
}
