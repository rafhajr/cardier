import { Button, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { Border1 } from './BordersTypes/Border1'
import { Border2 } from './BordersTypes/Border2'
import { Border3Black, Border3White } from './BordersTypes/Border3'
import { Border4Black, Border4White } from './BordersTypes/Border4'
import { Border5Black, Border5White } from './BordersTypes/Border5'
import { Border6Black, Border6White } from './BordersTypes/Border6'

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
              w="100%"
              h="100%"
              color={borderSelected === type ? '#fff' : '#000'}
            />
          )}
          {type === 3 && borderSelected === type && (
            <Border3White w="100%" h="100%" />
          )}
          {type === 3 && borderSelected !== type && (
            <Border3Black w="100%" h="100%" />
          )}
          {type === 4 && borderSelected === type && (
            <Border4White w="100%" h="100%" />
          )}
          {type === 4 && borderSelected !== type && (
            <Border4Black w="100%" h="100%" />
          )}
          {type === 5 && borderSelected === type && (
            <Border5White w="100%" h="100%" />
          )}
          {type === 5 && borderSelected !== type && (
            <Border5Black w="100%" h="100%" />
          )}
          {type === 6 && borderSelected === type && (
            <Border6White w="100%" h="100%" />
          )}
          {type === 6 && borderSelected !== type && (
            <Border6Black w="100%" h="100%" />
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
        name="Nome do estilo"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={2}
        name="Nome do estilo"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={3}
        name="Nome do estilo"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={4}
        name="Nome do estilo"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={5}
        name="Nome do estilo"
      />
      <BorderButton
        borderSelected={borderSelected}
        setBorderSelected={setBorderSelected}
        type={6}
        name="Nome do estilo"
      />
    </Grid>
  )
}
