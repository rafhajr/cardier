import { Box, Input as ChakraInput } from '@chakra-ui/react'
import React from 'react'

interface IInput {
  placeholder: string
  w: string
  value: string
  setValue: (data: string) => void
  maxLenght?: number
}

export const Input = ({ placeholder, w, value, setValue, maxLenght }: IInput) => {
  return (
    <Box pt="13px">
      <ChakraInput
        placeholder={placeholder}
        w={w}
        h="40px"
        fontSize="14px"
        fontWeight="bold"
        p="13px"
        borderColor="#A9A9A9"
        borderRadius="10px"
        focusBorderColor="#1A1A1A"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        _placeholder={{ opacity: 1, color: '#1A1A1A' }}
        maxLength={maxLenght ? maxLenght : 100}
      />
    </Box>
  )
}
