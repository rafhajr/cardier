import { Box, Button, Image } from '@chakra-ui/react'
import React from 'react'
import { useDropzone } from 'react-dropzone'
import { HiOutlinePlusSm, HiTrash } from 'react-icons/hi'

interface IDropZone {
  w?: string
  h: string
  maxW: string
  maxH: string
  value: string
  setValue: (data: string) => void
  pt: string
  deleteValue: () => void
  index?: number
}

export const DropZone = ({
  w,
  h,
  value,
  setValue,
  maxW,
  maxH,
  pt,
  deleteValue,
  index,
}: IDropZone) => {
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
      maxW={maxW}
      h={h}
      maxH={maxH}
      border="1px"
      borderStyle="dashed"
      borderColor="#C4C4C4"
      borderRadius="10px"
      position="relative"
      pt={pt}
      key={index}
    >
      <Box
        {...getRootProps()}
        w={w}
        h={h}
        maxW={maxW}
        maxH={maxH}
        border="1px"
        borderStyle="dashed"
        borderColor="#C4C4C4"
        borderRadius="10px"
        alignItems="center"
        display="flex"
        justifyContent="center"
        backgroundColor={value && '#C4C4C4'}
      >
        <input {...getInputProps()} accept="image/*" />
        {value ? (
          <Box>
            <Image
              src={value}
              maxW={maxW}
              maxH={maxH}
              // boxSize="80%"
              alt="Imagem Customizado"
            />
          </Box>
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
            onClick={() => deleteValue()}
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
