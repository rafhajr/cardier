import { HStack, Icon } from '@chakra-ui/react'
import { RiLockPasswordLine, RiLogoutBoxLine } from 'react-icons/ri'

export const ActionsNav = () => {
  return (
    <HStack
      spacing={['4', '6']}
      mx={['4', '6']}
      pr={['4', '6']}
      py="1"
      color="gray.300"
      borderRightWidth={1}
      borderColor="gray.700"
    >
      <Icon as={RiLockPasswordLine} fontSize="20" />
      <Icon as={RiLogoutBoxLine} fontSize="20" />
    </HStack>
  )
}
