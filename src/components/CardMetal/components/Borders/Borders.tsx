import {
  Border1,
  Border2,
  Border3,
  Border4,
  Border5,
  Border6
} from '@/assets/Borders'
import { Button, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'

interface IBorderButton {
  borderSelected: number
  setBorderSelected: (data: number) => void
  type: number
  name: string
}

interface IBorders {
  borderSelected: number
  setBorderSelected: (data: number) => void
}

export const Borders = ({ borderSelected, setBorderSelected }: IBorders) => {
  const BorderButton = ({
    borderSelected,
    setBorderSelected,
    type,
    name,
  }: IBorderButton) => {
    return (
      <GridItem textAlign="center">
        <Button
          w="108px"
          h="55px"
          border="1px"
          borderRadius="5px"
          borderColor={borderSelected === type ? '#000' : '#C4C4C4'}
          backgroundColor={borderSelected === type ? '#000' : '#fff'}
          onClick={() =>
            type === borderSelected
              ? setBorderSelected(0)
              : setBorderSelected(type)
          }
          _focus={{ boxShadow: 'none' }}
        >
          {type === 1 && (
            <Border1
              w="100%"
              h="100%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
          {type === 2 && (
            <Border2
              w="110%"
              h="110%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
          {type === 3 && (
            <Border3
              w="100%"
              h="100%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
          {type === 4 && (
            <Border4
              w="100%"
              h="100%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
          {type === 5 && (
            <Border5
              w="100%"
              h="100%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
          {type === 6 && (
            <Border6
              w="100%"
              h="100%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
        </Button>
        <Text pt="7px" color="#A9A9A9" fontSize="14px" alignSelf="center">
          {name}
        </Text>
      </GridItem>
    )
  }

  return (
    <Grid
      templateColumns="repeat(3, 1fr)"
      h="200px"
      w="500px"
      gap="10px"
      pt={19}
    >
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={1}
        name="Borda 01"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={2}
        name="Borda 02"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={3}
        name="Borda 03"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={4}
        name="Borda 04"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={5}
        name="Borda 05"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={6}
        name="Borda 06"
      />
    </Grid>
  )
}
