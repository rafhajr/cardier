import { Box, Button, Flex, Spacer, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'

interface IButton {
  label: string
  bc: string
  c: string
  onClick: any
}

export const NavigationButtons = () => {
  const { currentTab, setCurrentTab, orderCard } = useCard()

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  const ButtonStyled = ({ label, bc, c, onClick }: IButton) => {
    return (
      <Box>
        <Button w="217px" h="37.44px" backgroundColor={bc} color={c} onClick={onClick}>
          {label}
        </Button>
      </Box>
    )
  }

  return (
    <Box pt="69px">
      <Flex w="450px" pb="5px">
        {currentTab !== 3 && (
          <>
            <ButtonStyled label="Próximo" bc="#1A1A1A" c="#FFFFFF" onClick={() => setCurrentTab(currentTab + 1)}/>
            <Spacer />
          </>
        )}
        {currentTab !== 1 && (
          <ButtonStyled label="Solicitar cartão" bc="#E0BE74" c="#272727" onClick={() => orderCard()}/>
        )}
      </Flex>
      {currentTab !== 1 && (
        <ButtonStyled label="Anterior" bc="#fff" c="#C4C4C4" onClick={() => setCurrentTab(currentTab - 1)}/>
      )}
    </Box>
  )
}
