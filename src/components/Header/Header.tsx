import { Box, Flex, Image, Spacer, useBreakpointValue } from '@chakra-ui/react'

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex
      as="header"
      w={isWideVersion ? "100" : "105%"}
      // maxWidth={1480}
      h="60px"
      mx="auto"
      px="10%"
      align="center"
      color='#fff'
      backgroundColor='#000'
    >
      <Box>
        <Image w="100%" maxW="152.35px" src="/title.png" alt="title" />
      </Box>
      <Spacer />
      <Box>
        <Image w="100%" maxW="24px" src="/new_logo.png" alt="logo" />
      </Box>
    </Flex>
  )
}
