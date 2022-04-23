import { Typography } from '@/components/Typography'
import { Box, Flex, Spacer } from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'
import { Borders, Materials, Prints } from './components'

export const CardMetal = () => {
  const {
    materialSelected,
    setMaterialSelected,
    printSelected,
    setPrintSelected,
    borderSelected,
    setBorderSelected,
  } = useCard()

  return (
    <Box w="600px">
      <Box pt="10px">
        <Typography text="Metal" type="Title" />
      </Box>

      <Flex pt="42px" pr="30px">
        <Box>
          <Typography text="Material" type="Subtitle" />
          <Materials
            materialSelected={materialSelected}
            setMaterialSelected={setMaterialSelected}
          />
        </Box>
        <Spacer />
        <Box>
          <Typography text="Impressão" type="Subtitle" />
          <Prints
            printSelected={printSelected}
            setPrintSelected={setPrintSelected}
          />
        </Box>
      </Flex>

      <Box pt="29px">
        <Typography text="Borda" type="Subtitle" />
        <Borders
          borderSelected={borderSelected}
          setBorderSelected={setBorderSelected}
        />
      </Box>
    </Box>
  )
}
