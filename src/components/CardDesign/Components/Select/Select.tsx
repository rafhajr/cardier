import { Box, Select as ChackraSelect } from '@chakra-ui/react'
import React from 'react'

interface ISelect {
  w: string
  value: number
  setValue: (data: number) => void
  options: {
    value: number
    label: string
  }[]
}

export const Select = ({ w, options, value, setValue }: ISelect) => {
  return (
    <Box pt="13px">
      <ChackraSelect
        w={w}
        value={value}
        fontSize="14px"
        fontWeight="bold"
        borderRadius="10px"
        focusBorderColor="#1A1A1A"
        borderColor="#A9A9A9"
        onChange={(e) => setValue(parseInt(e.target.value))}
      >
        {options.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          )
        })}
      </ChackraSelect>
    </Box>
  )
}
