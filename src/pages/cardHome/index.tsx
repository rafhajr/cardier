import { Card } from '@/components/Card'
import { CardDesign } from '@/components/CardDesign'
import { CardInformations } from '@/components/CardInformations'
import { CardMetal } from '@/components/CardMetal'
import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { NavigationButtons } from '@/components/NavigationButtons'
import { UserInformation } from '@/components/UserInformation'
import {
  Box,
  Flex,
  Stack,
  StackDivider,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'

const CardHome: React.FC = () => {
  const { currentTab } = useCard()

  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  return (
    <>
      <Header />
      {isWideVersion && <Menu />}
      <Flex align="center" justify="center" w="100%">
        <Stack
          divider={
            isWideVersion ? (
              <StackDivider borderColor="gray.200" />
            ) : (
              <StackDivider borderColor="white" />
            )
          }
          spacing="5%"
          direction={isWideVersion ? 'row' : 'column'}
          align="center"
        >
          <Box>
            <Card />
          </Box>

          {!isWideVersion && <Menu />}
          <Box w="80%" alignSelf="center">
            {currentTab === 1 && <CardInformations />}
            {currentTab === 2 && <CardMetal />}
            {currentTab === 3 && <CardDesign />}
            <NavigationButtons />
          </Box>
        </Stack>
      </Flex>
      <UserInformation />
    </>
  )
}

export default CardHome
