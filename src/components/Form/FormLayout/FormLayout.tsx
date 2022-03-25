import { Box, Divider, Heading } from '@chakra-ui/react'
import { ReactNode } from 'react'

type FormLayoutProps = {
  title: string
  children: ReactNode
}

export function FormLayout({ children, title }: FormLayoutProps) {
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p={['6', '8']}>
      <Heading size="lg" fontWeight="normal">
        {title}
      </Heading>

      <Divider my="6" borderColor="gray.700" />

      {children}
    </Box>
  )
}
