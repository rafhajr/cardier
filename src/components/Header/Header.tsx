import {
  Flex,
  Icon,
  IconButton,
  Image,
  useBreakpointValue,
} from '@chakra-ui/react'
import React from 'react'
import { RiMenuLine } from 'react-icons/ri'
import { ActionsNav } from './ActionsNav'
import { Profile } from './Profile'
import { SearchBox } from './SearchBox'

export const Header = () => {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true, // a partir do 'lg' = true
  })

  // const { onOpen } = useSidebarDrawer()

  return (
    <Flex
      as="header"
      w="100%"
      maxWidth={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      {!isWideVersion && (
        <IconButton
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          // onClick={onOpen}
          aria-label="Open navigation"
          mr="2"
        ></IconButton>
      )}
      <Image w="80px" mb="3" src="../logo.png" alt="logo" />
      {isWideVersion && <SearchBox />}
      <Flex align="center">
        <ActionsNav />
        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  )
}
