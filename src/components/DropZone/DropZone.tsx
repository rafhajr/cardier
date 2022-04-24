import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { HiOutlinePlusSm, HiTrash } from 'react-icons/hi'

interface IDropZone {
  w: string
  h: string
  value: string
  setValue: (data: string) => void
}

export const DropZone = ({ w, h, value, setValue }: IDropZone) => {
  const onDrop = (acceptedFiles: any[]) => {
    const fileAccetpted = acceptedFiles[0]

    const urlFile = URL.createObjectURL(fileAccetpted)

    setValue(urlFile)
  }

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*',
  })

  return (
    <Box
      w={w}
      h={h}
      border="1px"
      borderStyle="dashed"
      borderColor="#C4C4C4"
      borderRadius="10px"
      position="relative"
    >
      <Box
        {...getRootProps()}
        w={w}
        h={h}
        alignItems="center"
        display="flex"
        justifyContent="center"
      >
        <input {...getInputProps()} accept="image/*" />
        {value ? (
          <Image src={value} maxH={h} maxW={w} alt="Imagem Ponto" />
        ) : (
          <HiOutlinePlusSm size="30px" color="#A9A9A9" />
        )}
      </Box>
      {value && (
        <>
          <Button
            position="absolute"
            left="95%"
            top="-10%"
            border="1px"
            borderColor="#A9A9A9"
            borderRadius="10px"
            onClick={() => setValue('')}
            backgroundColor="#fff"
            // w="50px"
            // width="20px"
            // height="20px"
          >
            <HiTrash size="20px" color="#A9A9A9" />
          </Button>
        </>
      )}
    </Box>
  )
}
