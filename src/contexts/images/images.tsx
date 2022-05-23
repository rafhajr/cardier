import { createContext, useMemo, useState } from 'react'
import {
  IAddFile,
  IDeleteFile,
  IFiles,
  ImagesContextData,
  ImagesContextProviderProps,
  IMoveFile,
  IResizeFile
} from './models'

const ImagesContext = createContext({} as ImagesContextData)

function ImagesContextProvider({ children }: ImagesContextProviderProps) {
  const [files, setFiles] = useState<IFiles[]>([])
  const [projectsReady, setProjectsReady] = useState<IFiles[]>([])
  const [model, setModel] = useState<number>(-1)

  const addFile = ({ e }: IAddFile) => {
    const image = {
      file: e,
      size: { width: '100px', height: '100px' },
      position: { x: 0, y: 0 },
    }

    setFiles((file) => [...file, image])
  }

  const deleteFile = ({ position }: IDeleteFile) => {
    const existingFiles = files.filter((_, index) => index !== position)
    setFiles(existingFiles)
  }

  const resizeFile = ({ size, index }: IResizeFile) => {
    const newSize = files.map((file, i) => {
      if (i === index) {
        return { ...file, size }
      }
      return file
    })
    setFiles(newSize)
  }

  const moveFile = ({ position, index }: IMoveFile) => {
    const newPosition = files.map((file, i) => {
      if (i === index) {
        const newFile = {
          file: file.file,
          size: { width: file.size.width, height: file.size.height },
          position: { x: position.x, y: position.y },
        }
        return newFile
      }
      return file
    })

    setFiles(newPosition)
  }

  const addProjectsReady = ({ e }: IAddFile) => {
    const image = {
      file: e,
      size: { width: '100px', height: '100px' },
      position: { x: 165, y: 85 },
    }

    setProjectsReady((file) => [...file, image])
  }

  const deleteProjectsReady = ({ position }: IDeleteFile) => {
    const existingFiles = projectsReady.filter((_, index) => index !== position)
    setProjectsReady(existingFiles)
  }

  const resizeProjectsReady = ({ size, index }: IResizeFile) => {
    const newSize = projectsReady.map((file, i) => {
      if (i === index) {
        return { ...file, size }
      }
      return file
    })
    setProjectsReady(newSize)
  }

  const moveProjectsReady = ({ position, index }: IMoveFile) => {
    const newPosition = projectsReady.map((file, i) => {
      if (i === index) {
        const newFile = {
          file: file.file,
          size: { width: file.size.width, height: file.size.height },
          position: { x: position.x, y: position.y },
        }
        return newFile
      }
      return file
    })

    setProjectsReady(newPosition)
  }

  const value = useMemo(
    () => ({
      files,
      addFile,
      deleteFile,
      resizeFile,
      moveFile,
      projectsReady,
      addProjectsReady,
      deleteProjectsReady,
      resizeProjectsReady,
      moveProjectsReady,
      model, setModel
    }),
    [
      files,
      addFile,
      deleteFile,
      resizeFile,
      moveFile,
      projectsReady,
      addProjectsReady,
      deleteProjectsReady,
      resizeProjectsReady,
      moveProjectsReady,
      model, setModel
    ]
  )

  return (
    <ImagesContext.Provider value={value}>{children}</ImagesContext.Provider>
  )
}

export { ImagesContextProvider, ImagesContext }
