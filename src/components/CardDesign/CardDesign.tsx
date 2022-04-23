import { DropZone } from '@/components/DropZone'
import { Typography } from '@/components/Typography'
import { Box, Flex, Spacer, Text } from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'
import { dataFlags, dataSizes, dataTypos } from '../../constants/index'
import { Input } from '../Input'
import { Select } from './Components'

export const CardDesign = () => {
  const {
    customText,
    setCustomText,
    sizeValue,
    setSizeValue,
    typoValue,
    setTypoValue,
    flagValue,
    setFlagValue,
    file,
    setFile,
    flag,
    setFlag,
  } = useCard()

  return (
    <Box w="600px">
      <Box pt="10px">
        <Typography text="Design" type="Title" />
      </Box>

      <Box pt="42px">
        <Text>Adicionar Texto</Text>

        <Box pt="18px">
          <Typography text="Texto" type="Subtitle" />
          <Input
            placeholder="Meu texto personalizado"
            w="479px"
            value={customText}
            setValue={setCustomText}
          />
        </Box>
      </Box>

      <Flex pt="32px" w="270px">
        <Box>
          <Typography text="Tamanho" type="Subtitle" />
          <Select
            w="100px"
            options={dataSizes}
            value={sizeValue}
            setValue={setSizeValue}
          />
        </Box>
        <Spacer />
        <Box>
          <Typography text="Tipografia" type="Subtitle" />
          <Select
            w="150px"
            options={dataTypos}
            value={typoValue}
            setValue={setTypoValue}
          />
        </Box>
      </Flex>

      <Box pt="29px">
        <Text pb="14px">Adicionar Imagem</Text>
        <DropZone w="480px" h="74px" value={file} setValue={setFile} />
      </Box>

      <Box pt="29px">
        <Text>Adicionar Bandeira</Text>
        <Flex pt="18px" w="485px">
          <Box>
            <Typography text="Bandeiras" type="Subtitle" />
            <Select
              w="228px"
              options={dataFlags}
              value={flagValue}
              setValue={setFlagValue}
            />
          </Box>
          <Spacer />
          <Box>
            <Typography text="Adicionar bandeira" type="Subtitle" />
            <Box pt="13px">
              <DropZone w="226px" h="43px" value={flag} setValue={setFlag} />
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  )
}
