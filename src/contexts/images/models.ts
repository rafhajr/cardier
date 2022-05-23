/* eslint-disable no-unused-vars */

import { ReactNode } from 'react'

export type ImagesContextProviderProps = {
  children: ReactNode
}

export type IFiles = {
  file: string
  size: { width: string; height: string }
  position: { x: number; y: number }
}

export type IAddFile = {
  e: any
}

export type IDeleteFile = {
  position: number
}

export type IResizeFile = {
  size: { height: string; width: string }
  index: number
}

export type IMoveFile = {
  position: { x: number; y: number }
  index: number
}

export type ImagesContextData = {
  files: IFiles[]
  addFile: (data: IAddFile) => void
  deleteFile: (data: IDeleteFile) => void
  resizeFile: (data: IResizeFile) => void
  moveFile: (data: IMoveFile) => void
  projectsReady: IFiles[]
  addProjectsReady: (data: IAddFile) => void
  deleteProjectsReady: (data: IDeleteFile) => void
  resizeProjectsReady: (data: IResizeFile) => void
  moveProjectsReady: (data: IMoveFile) => void
  model: string,
  setModel: (data: string) => void
}
