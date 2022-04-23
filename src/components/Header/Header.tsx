import { Box, Flex, Image, Spacer, useBreakpointValue } from '@chakra-ui/react'

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w="100%"
      // maxWidth={1480}
      h="60px"
      mx="auto"
      px="150"
      align="center"
      color='#fff'
      backgroundColor='#000'
    >
      <Box>
        <Image w="152.35px" h="16.4px" src="/title.png" alt="title" />
      </Box>
      <Spacer />
      <Box>
        <Image w="24px" h="21px" src="/new_logo.png" alt="logo" />
      </Box>
    </Flex>
  )
}
