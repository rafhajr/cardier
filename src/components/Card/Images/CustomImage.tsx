import { Image } from '@chakra-ui/react'
import React from 'react'
import { Rnd } from 'react-rnd'

interface IImages {
  file: {
    file: string
    size: { width: string; height: string }
    position: { x: number; y: number }
  }
  resizeFile: (
    position: { height: string; width: string },
    index: number
  ) => void
  moveFile: (position: { x: number; y: number }, index: number) => void
  index: number
}

export const CustomImage = ({ file, resizeFile, moveFile, index }: IImages) => {
  return (
    <Rnd
      size={{
        width: (file.size.width || '100px') + '10px',
        height: (file.size.height || '100px') + '10px',
      }}
      position={{ x: file.position.x || 0, y: file.position.y || 0 }}
      onDragStop={(e, d) => {
        moveFile({ x: d.x, y: d.y }, index)
      }}
      onResizeStop={(e, direction, ref, delta, position) => {
        resizeFile({ width: ref.style.width, height: ref.style.height }, index)
      }}
      bounds="parent"
      className="card"
      lockAspectRatio={true}
      enableResizing={{
        top: false,
        right: false,
        bottom: false,
        left: false,
        topRight: true,
        bottomRight: true,
        bottomLeft: true,
        topLeft: true,
      }}
    >
      <Image
        width={file.size.width || '100px'}
        height={file.size.height || '100px'}
        src={file.file}
        alt="customImage"
        userSelect="none"
        draggable="false"
      />
    </Rnd>
  )
}
