import components from '@/assets/models/black/script'
import { Typography } from '@/components/Typography'
import { Box, Grid } from '@chakra-ui/react'
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
          {components &&
            components.map((Component: any, index: number) => {
              return (
                <Box
                  key={index}
                  backgroundColor={
                    model !== index ? 'black' : 'white'
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
                    model !== index
                      ? setModel(index)
                      : setModel(-1)
                  }
                >
                  <Component.Model
                    key={index}
                    borderRadius="5px"
                    draggable="false"
                    w="100%"
                    fill={
                      model !== index ? 'white' : 'black'
                    }
                  />
                </Box>
              )
            })}
        </Grid>
      </Box>
    </Box>
  )
}
