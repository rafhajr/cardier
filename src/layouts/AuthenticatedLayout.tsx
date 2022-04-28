import { Header } from '@/components/Header'
import { Flex } from '@chakra-ui/react'
import { ReactNode } from 'react'

type AuthenticatedLayoutProps = {
  children: ReactNode
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" overflow="hidden">
        {children}
      </Flex>
    </Flex>
  )
}
