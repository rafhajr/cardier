import images from '@/assets/models'
import { Typography } from '@/components/Typography'
import { Box, Grid, Img } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCard, useImages } from 'src/hooks'

export const CardModels = () => {
  const {
    customText,
    setCustomText,
    sizeValue,
    setSizeValue,
    typoValue,
    setTypoValue,
    flagValue,
    setFlagValue,
    flag,
    setFlag,
  } = useCard()

  const {
    files,
    addFile,
    deleteFile,
    projectsReady,
    addProjectsReady,
    deleteProjectsReady,
  } = useImages()

  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  return (
    <Box w="100%" maxW="600px">
      <Box pt="10px">
        <Typography text="Modelos prontos" type="Title" />
        <Grid
          templateColumns="repeat(2, 1fr)"
          h="455px"
          w="590px"
          gap="29px"
          border="1px"
          borderColor="#A1A1A1"
          borderRadius="5px"
          overflow="auto"
          p="22px"
          css={{
            '&::-webkit-scrollbar': {
              width: '4px',
            },
            '&::-webkit-scrollbar-track': {
              width: '6px',
            },
            '&::-webkit-scrollbar-thumb': {
              borderRadius: '24px',
            },
          }}
        >
          {images &&
            images.map((img: any, index: number) => {
              return (
                <Box
                  key={index}
                  backgroundColor="black"
                  w="221px"
                  h="142px"
                  alignItems="center"
                  display="flex"
                  justifyContent="center"
                  border="1px"
                  borderColor="#A1A1A1"
                  borderRadius="5px"
                  justifySelf="center"
                >
                  <Img
                    key={index}
                    src={img.default.src}
                    alt={img.default.src}
                    borderRadius="5px"
                  />
                </Box>
              )
            })}
        </Grid>
      </Box>
    </Box>
  )
}
