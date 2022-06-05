import { Typography } from '@/components/Typography'
import {
  Box,
  Spacer,
  Stack, useBreakpointValue
} from '@chakra-ui/react'
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

  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <Box maxW="600px">
      <Box pt="10px">
        <Typography text="Metal" type="Title" />
      </Box>

      <Stack
        spacing="2%"
        direction={isWideVersion ? 'row' : 'column'}
        // align="stretch"
      >
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
      </Stack>

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
