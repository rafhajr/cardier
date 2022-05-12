import { theme } from '@/styles/theme'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactNode } from 'react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { queryClient } from 'src/lib/queryClient'
import { CardContextProvider } from './cards'
import { ImagesContextProvider } from './images'

type AppProviderProps = {
  children: ReactNode
}

export function AppProvider({ children }: AppProviderProps) {
  return (
    <ChakraProvider theme={theme}>
      <CardContextProvider>
        <ImagesContextProvider>
          <QueryClientProvider client={queryClient}>
            {children}
            <ReactQueryDevtools />
          </QueryClientProvider>
        </ImagesContextProvider>
      </CardContextProvider>
    </ChakraProvider>
  )
}
