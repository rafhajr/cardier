import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ScrollProps = {
  children: ReactNode
}

export function Scroll({ children }: ScrollProps) {
  return (
    <Flex
      flexDir="column"
      maxH="70vh"
      overflowY="auto"
      pr="4"
      pb="10"
      css={{
        '&::-webkit-scrollbar': {
          width: '4px',
        },
        '&::-webkit-scrollbar-track': {
          width: '6px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: '#DD6B20',
          borderRadius: '24px',
        },
      }}
    >
      {children}
    </Flex>
  )
}
