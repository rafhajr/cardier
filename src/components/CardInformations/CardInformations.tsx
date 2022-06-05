import { Input } from '@/components/Input'
import { Typography } from '@/components/Typography'
import { Box } from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'
import { ButtonOptions } from './components'

export const CardInformations = () => {
  const {
    cardName,
    cardNameLocal,
    cardNumberLocal,
    cardValidityLocal,
    setCardName,
    setCardNameLocal,
    setCardNumberLocal,
    setCardValidityLocal,
  } = useCard()

  const title = 'Nome do cartão(' + cardName.length + '/26)'

  return (
    <Box  maxW="600px">
      <Box pt="10px">
        <Typography text="Informações" type="Title" />
      </Box>

      <Box pt="42px">
        <Typography text={title} type="Subtitle" />
        <Input
          placeholder="Nome aqui"
          w="100%"
          maxW="479px"
          value={cardName}
          setValue={setCardName}
          maxLenght={26}
        />
      </Box>

      <Box pt="32px">
        <Typography text="Nome do cartão" type="Subtitle" />
        <ButtonOptions value={cardNameLocal} setValue={setCardNameLocal} />
      </Box>

      <Box pt="29px">
        <Typography text="Número do cartão" type="Subtitle" />
        <ButtonOptions value={cardNumberLocal} setValue={setCardNumberLocal} />
      </Box>

      <Box pt="29px">
        <Typography text="Validade do cartão" type="Subtitle" />
        <ButtonOptions
          value={cardValidityLocal}
          setValue={setCardValidityLocal}
        />
      </Box>
    </Box>
  )
}
