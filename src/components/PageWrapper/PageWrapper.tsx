import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Spinner,
  Tooltip,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { ReactNode } from 'react'
import { RiAddLine, RiRefreshLine } from 'react-icons/ri'
import { spin } from 'src/animations'

type PageWrapperProps = {
  children?: ReactNode
  isLoading?: boolean
  isFetching?: boolean
  refetch: () => void
  title?: string
  registrationRoute?: string
}

export function PageWrapper({
  isFetching,
  isLoading,
  refetch,
  title,
  registrationRoute,
  children,
}: PageWrapperProps) {
  return (
    <Box flex="1" borderRadius={8} bg="gray.800" p="8">
      <Flex mb="8" justify="space-between" align="center">
        <Heading size="lg" fontWeight="normal">
          {title}
          {!isLoading && isFetching && (
            <Spinner size="sm" color="gray.500" ml="4" />
          )}
        </Heading>

        <Flex>
          <Tooltip label="Atualizar">
            <Button
              size="sm"
              fontSize="sm"
              bgColor="gray.700"
              cursor="pointer"
              onClick={refetch}
            >
              <Icon
                as={RiRefreshLine}
                fontSize={20}
                animation={
                  !isLoading && isFetching ? `${spin} 1s infinite linear` : ''
                }
              />
            </Button>
          </Tooltip>
          <NextLink href={registrationRoute!} passHref>
            <Button
              as="a"
              size="sm"
              fontSize="sm"
              colorScheme="orange"
              ml="4"
              leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              cursor="pointer"
            >
              Cadastrar
            </Button>
          </NextLink>
        </Flex>
      </Flex>
      {children}
    </Box>
  )
}
