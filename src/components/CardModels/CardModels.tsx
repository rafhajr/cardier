import images from '@/assets/models'
import { Typography } from '@/components/Typography'
import { Box, Grid, Img } from '@chakra-ui/react'
import React from 'react'
import { useImages } from 'src/hooks'

export const CardModels = () => {
  const { model, setModel } = useImages()

  const onChange = () => {

  }


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
                  as="button"
                  onClick={() => model !== img.default.src ? setModel(img.default.src) : setModel('')}
                >
                  <Img
                    key={index}
                    src={img.default.src}
                    alt={img.default.src}
                    borderRadius="5px"
                    draggable="false"
                  />
                </Box>
              )
            })}
        </Grid>
      </Box>
    </Box>
  )
}
