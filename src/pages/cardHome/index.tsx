import { Card } from '@/components/Card'
import { CardDesign } from '@/components/CardDesign'
import { CardInformations } from '@/components/CardInformations'
import { CardMetal } from '@/components/CardMetal'
import { Header } from '@/components/Header'
import { Menu } from '@/components/Menu'
import { NavigationButtons } from '@/components/NavigationButtons'
import { UserInformation } from '@/components/UserInformation'
import { Box, Flex, HStack, StackDivider } from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'

const CardHome: React.FC = () => {
  const { currentTab } = useCard()

  return (
    <>
      <Header />
      <Menu />
      <Flex align="center" justify="center">
        <HStack
          divider={<StackDivider borderColor="gray.200" />}
          spacing={50}
          align="stretch"
        >
          <Box >
            <Card />
          </Box>
          <Box >
            {currentTab === 1 && <CardInformations />}
            {currentTab === 2 && <CardMetal />}
            {currentTab === 3 && <CardDesign />}
            <NavigationButtons />
          </Box>
        </HStack>
      </Flex>
      <UserInformation />
    </>
  )
}

export default CardHome
