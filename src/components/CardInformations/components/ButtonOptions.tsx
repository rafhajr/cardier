import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import { BiBlock, BiCreditCardAlt } from 'react-icons/bi'
import { MdCreditCard } from 'react-icons/md'

interface IButton {
  label: string
  selected: boolean
  onClick: any
  icon: React.ReactElement
}

interface IButtonOptions {
  value: number
  setValue: (data: number) => void
}

const ButtonOption = ({ label, selected, onClick, icon }: IButton) => {
  return (
    <Button
      _hover={selected ? {} : { bg: '#EEEEEE' }}
      backgroundColor={selected ? '#1A1A1A' : '#E9E9E9'}
      h="36px"
      w="146px"
      p="10px"
      color={selected ? '#FFFFFF' : '#1A1A1A'}
      leftIcon={icon}
      onClick={onClick}
      _focus={{ boxShadow: 'none' }}
    >
      {label}
    </Button>
  )
}

export const ButtonOptions = ({ value, setValue }: IButtonOptions) => {
  return (
    <Stack direction={[ 'row']} spacing="18px" pt="20px">
      <ButtonOption
        selected={value === 1}
        onClick={() => setValue(1)}
        icon={<BiCreditCardAlt />}
        label="Frente"
      />
      <ButtonOption
        selected={value === 2}
        onClick={() => setValue(2)}
        icon={<MdCreditCard />}
        label="Atrás"
      />
      <ButtonOption
        selected={value === 3}
        onClick={() => setValue(3)}
        icon={<BiBlock />}
        label="Não utilizar"
      />
    </Stack>
  )
}
