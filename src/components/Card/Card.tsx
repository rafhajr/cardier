import { Box, Image, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

export const Card = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box >
      <Image src="/cards.png" alt="cards" w="445px" h="573px" />
    </Box>
  )
}
