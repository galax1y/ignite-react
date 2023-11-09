'use client'

import { useFileInput } from './root'
import { FileItem } from './file-item'

import { useAutoAnimate } from '@formkit/auto-animate/react'

export function FileList() {
  const { files } = useFileInput()
  const [parent] = useAutoAnimate({})

  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map((file) => {
        return (
          <FileItem
            key={file.name}
            name={file.name}
            size={file.size}
            state="error"
          />
        )
      })}
    </div>
  )
}
