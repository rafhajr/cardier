import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type ScrollProps = {
  children: ReactNode
}

export function Scroll({ children }: ScrollProps) {
  return (
    <Flex flexDir="column" maxH="70vh" overflowY="auto" pr="4" pb="10">
      {children}
    </Flex>
  )
}
