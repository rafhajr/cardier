import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  HStack,
  Image,
  Stack,
  useBreakpointValue
} from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'

const MenuQuestionsButton = () => {
  return (
    <Button
      height="44px"
      width="143px"
      border="1px"
      backgroundColor={'#fff'}
      borderColor={'#1A1A1A'}
      color={'#1A1A1A'}
      onClick={() =>
        window.open(
          'https://api.whatsapp.com/send/?phone=554891901224&text&app_absent=0',
          '_blank',
          'noopener,noreferrer'
        )
      }
      _focus={{ boxShadow: 'none' }}
    >
      <Stack direction="row" align="center">
        <Box>
          <Image w="13.93px" h="14px" src="/whatsappIcon.png" alt="whatsapp" />
        </Box>
        <Box>Dúvidas?</Box>
      </Stack>
    </Button>
  )
}

export const Menu = () => {
  const { currentTab, setCurrentTab } = useCard()

  const MenuMobileTab = () => {
    return (
      <ButtonGroup isAttached>
        <Button
          // size="md"
          height="37px"
          width="100%"
          maxW="200px"
          border="1px"
          backgroundColor={currentTab === 1 ? '#1A1A1A' : '#fff'}
          borderColor={currentTab === 1 ? '#1A1A1A' : '#C4C4C4'}
          color={currentTab === 1 ? '#fff' : '#C4C4C4'}
          onClick={() => setCurrentTab(1)}
          _focus={{ boxShadow: 'none' }}
        >
          I
        </Button>
        <Button
          // size="md"
          height="37px"
          width="100%"
          maxW="200px"
          border="1px"
          backgroundColor={currentTab === 2 ? '#1A1A1A' : '#fff'}
          borderColor={currentTab === 2 ? '#1A1A1A' : '#C4C4C4'}
          color={currentTab === 2 ? '#fff' : '#C4C4C4'}
          onClick={() => setCurrentTab(2)}
          _focus={{ boxShadow: 'none' }}
        >
          M
        </Button>
        <Button
          // size="md"
          height="37px"
          width="100%"
          maxW="200px"
          border="1px"
          backgroundColor={currentTab === 3 ? '#1A1A1A' : '#fff'}
          borderColor={currentTab === 3 ? '#1A1A1A' : '#C4C4C4'}
          color={currentTab === 3 ? '#fff' : '#C4C4C4'}
          onClick={() => setCurrentTab(3)}
          _focus={{ boxShadow: 'none' }}
        >
          D
        </Button>
      </ButtonGroup>
    )
  }

  const MenuTab = () => {
    return (
      <ButtonGroup isAttached>
        <Button
          size="md"
          height="37px"
          width="200px"
          border="1px"
          backgroundColor={currentTab === 1 ? '#1A1A1A' : '#fff'}
          borderColor={currentTab === 1 ? '#1A1A1A' : '#C4C4C4'}
          color={currentTab === 1 ? '#fff' : '#C4C4C4'}
          onClick={() => setCurrentTab(1)}
          _focus={{ boxShadow: 'none' }}
        >
          Informações
        </Button>
        <Button
          size="md"
          height="37px"
          width="200px"
          border="1px"
          backgroundColor={currentTab === 2 ? '#1A1A1A' : '#fff'}
          borderColor={currentTab === 2 ? '#1A1A1A' : '#C4C4C4'}
          color={currentTab === 2 ? '#fff' : '#C4C4C4'}
          onClick={() => setCurrentTab(2)}
          _focus={{ boxShadow: 'none' }}
        >
          Metal
        </Button>
        <Button
          size="md"
          height="37px"
          width="200px"
          border="1px"
          backgroundColor={currentTab === 3 ? '#1A1A1A' : '#fff'}
          borderColor={currentTab === 3 ? '#1A1A1A' : '#C4C4C4'}
          color={currentTab === 3 ? '#fff' : '#C4C4C4'}
          onClick={() => setCurrentTab(3)}
          _focus={{ boxShadow: 'none' }}
        >
          Design
        </Button>
      </ButtonGroup>
    )
  }

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Flex h="60px" px="120" align="center" justify="center" py="41">
      <HStack spacing={158}>
        <Box>{isWideVersion ? <MenuTab /> : <MenuMobileTab />}</Box>
        {isWideVersion && (
          <Box>
            <MenuQuestionsButton />
          </Box>
        )}
      </HStack>
    </Flex>
  )
}
