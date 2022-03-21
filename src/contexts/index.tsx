import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from 'src/lib/queryClient'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider>
        {children}
        <ReactQueryDevtools />
      </ChakraProvider>
    </QueryClientProvider>
  )
}
