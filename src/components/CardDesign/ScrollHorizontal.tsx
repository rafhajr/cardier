import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
interface IBorderScroll {
  images: any[]
  addFile: any
}

export const ScrollHorizontal = ({ images, addFile }: IBorderScroll) => {
  return (
    <ScrollContainer horizontal hideScrollbars className="scroll-container">
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        width={125 * images.length + 'px'}
        justifyContent="space-between"
      >
        {images &&
          images.map((image: any, index: number) => {
            return (
              <Box
                key={index}
                backgroundColor="black"
                w="122px"
                h="100%"
                borderRadius="5px"
                as="button"
                display="flex"
                alignItems="center"
                justifyContent="center"
                onClick={() => addFile({ e: image.default.src })}
              >
                <Image maxH="100%" src={image.default.src} alt={image} />
              </Box>
            )
          })}
      </Box>
    </ScrollContainer>
  )
}
