'use client'

import { ComponentProps, createContext, useContext, useId } from 'react'

type FileInputContextType = {
  id: string
}

const FileInputContext = createContext({} as FileInputContextType)

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()

  return (
    <FileInputContext.Provider value={{ id }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

// Pré-criando o hook que acessa conteúdo do contexto
export const useFileInput = () => useContext(FileInputContext)
// const { id } = useFileInput()
