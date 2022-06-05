import { Card } from '@/components/Card'
import { CardDesign } from '@/components/CardDesign'
import { CardInformations } from '@/components/CardInformations'
import { CardMetal } from '@/components/CardMetal'
import { CardModels } from '@/components/CardModels'
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
    <Box minWidth="600px">
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
          // justifyContent="center"
        >
          <Box alignSelf={isWideVersion ? 'flex-start' : 'center'} pt="10px">
            <Card />
          </Box>

          {!isWideVersion && <Menu />}
          <Box alignSelf="center" pb="100px">
            {currentTab === 1 && <CardInformations />}
            {currentTab === 2 && <CardMetal />}
            {currentTab === 3 && <CardModels />}
            {currentTab === 4 && <CardDesign />}
            <NavigationButtons />
          </Box>
        </Stack>
      </Flex>
      <UserInformation />
    </Box>
  )
}

export default CardHome
