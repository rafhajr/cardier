import { Avatar, Box, Flex, Text } from '@chakra-ui/react'
import { useAuth } from 'src/hooks'

interface ProfileProps {
  showProfileData?: boolean
}

export const Profile = ({ showProfileData = true }: ProfileProps) => {
  const { user } = useAuth()
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="center">
          <Text>{user?.name}</Text>
          <Text color="gray.300" fontSize="small">
            {user?.email}
          </Text>
        </Box>
      )}
      <Avatar size="md" name={user?.name} colorScheme="orange" />
    </Flex>
  )
}
