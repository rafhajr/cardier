import { Flex, Icon, Input } from '@chakra-ui/react'
import { RiSearchLine } from 'react-icons/ri'

export const SearchBox = () => {
  return (
    <Flex
      as="label"
      flex="1"
      py="2"
      px="4"
      maxWidth={400}
      mx="auto"
      color="gray.200"
      pos="relative"
      bg="gray.800"
      borderRadius="full"
    >
      <Input
        color="gray.50"
        variant="unstyled"
        placeholder="Buscar na plataforma"
        _placeholder={{ color: 'gray.400' }}
        px="4"
        mr="4"
      />
      <Icon as={RiSearchLine} fontSize="20" />
    </Flex>
  )
}
