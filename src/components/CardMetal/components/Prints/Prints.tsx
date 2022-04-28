import {
  Button, VStack
} from '@chakra-ui/react'
import React from 'react'

interface IPrint {
  type: string
  label: string
  disabled?: boolean
  printSelected: string
  setPrintSelected: (data: string) => void
}

interface IPrints {
  printSelected: string
  setPrintSelected: (data: string) => void
}

export const Prints = ({ printSelected, setPrintSelected }: IPrints) => {
  const PrintButton = ({
    type,
    label,
    disabled,
    printSelected,
    setPrintSelected,
  }: IPrint) => {
    return (
      <Button
        w="131px"
        h="40px"
        borderRadius="5px"
        border="1px"
        borderColor={type === printSelected ? '#A9A9A9' : '#1A1A1A'}
        disabled={disabled}
        backgroundColor={type === printSelected ? '#1A1A1A' : '#FFF'}
        color={type === printSelected ? '#FFF' : '#1A1A1A'}
        onClick={() => setPrintSelected(type)}
        _focus={{ boxShadow: 'none' }}
      >
        {label}
      </Button>
    )
  }

  return (
    <VStack pt={23}>
      <PrintButton
        type="dark"
        label="Escuro"
        printSelected={printSelected}
        setPrintSelected={setPrintSelected}
      />
      <PrintButton
        type="clear"
        label="Claro"
        printSelected={printSelected}
        setPrintSelected={setPrintSelected}
      />
    </VStack>
  )
}
