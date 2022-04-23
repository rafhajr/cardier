import { Text } from '@chakra-ui/react'
import React from 'react'

interface ITypography {
  type: string
  text: string
}

export const Typography = ({ type, text }: ITypography) => {
  return (
    <Text
      color={type === 'Title' ? '#000000' : '#A9A9A9'}
      fontSize={type === 'Title' ? '24px' : '14px'}
      fontWeight={type === 'Title' ? 'semibold' : 'regular'}
    >
      {text}
    </Text>
  )
}
