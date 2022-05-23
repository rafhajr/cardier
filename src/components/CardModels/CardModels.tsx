import imagesBlack from '@/assets/models/black'
import imagesWhite from '@/assets/models/white'
import { Typography } from '@/components/Typography'
import { Box, Grid, Img } from '@chakra-ui/react'
import React from 'react'
import { useImages } from 'src/hooks'

export const CardModels = () => {
  const { model, setModel } = useImages()

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
          {imagesWhite &&
            imagesWhite.map((img: any, index: number) => {
              const returnImage = () => {
                if (model !== img.default.src) {
                  return img.default.src
                }

                const newImg: any = imagesBlack.find(
                  (image: any) =>
                    image.default.src.substring(0, 40) ===
                    model.substring(0, 40)
                )

                return newImg?.default.src || ''
              }

              return (
                <Box
                  key={index}
                  backgroundColor={
                    model !== img.default.src ? 'black' : 'white'
                  }
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
                  onClick={() =>
                    model !== img.default.src
                      ? setModel(img.default.src)
                      : setModel('')
                  }
                >
                  <Img
                    key={index}
                    src={returnImage()}
                    alt={returnImage()}
                    borderRadius="5px"
                    draggable="false"
                    w="100%"
                  />
                </Box>
              )
            })}
        </Grid>
      </Box>
    </Box>
  )
}
