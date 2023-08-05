'use client'

import {
  ComponentProps,
  createContext,
  useContext,
  useId,
  useState,
} from 'react'

type FileInputContextType = {
  id: string
  files: File[]
  onFilesSelected: (files: File[]) => void
}

const FileInputContext = createContext({} as FileInputContextType)

type RootProps = ComponentProps<'div'>

export function Root(props: RootProps) {
  const id = useId()
  const [files, setFiles] = useState<File[]>([])

  return (
    <FileInputContext.Provider value={{ id, files, onFilesSelected: setFiles }}>
      <div {...props} />
    </FileInputContext.Provider>
  )
}

// Pré-criando o hook que acessa conteúdo do contexto
export const useFileInput = () => useContext(FileInputContext)
// const { id } = useFileInput()
