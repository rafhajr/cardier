import { DropZone } from '@/components/DropZone'
import { Typography } from '@/components/Typography'
import images from '@/utils/importElements'
import flags from '@/utils/importFlags'
import { Box, Spacer, Stack, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'
import { useCard, useImages } from 'src/hooks'
import { dataSizes, dataTypos } from '../../constants/index'
import { Input } from '../Input'
import { Select } from './Components'
import { ScrollHorizontal } from './ScrollHorizontal'

export const CardDesign = () => {
  const {
    customText,
    setCustomText,
    sizeValue,
    setSizeValue,
    typoValue,
    setTypoValue,
  } = useCard()

  const { files, addFile, deleteFile } = useImages()

  const isWideVersion = useBreakpointValue({ base: false, lg: true })
  return (
    <Box maxW="600px">
      <Box pt="10px">
        <Typography text="Personalização" type="Title" />
      </Box>

      <Box pt="29px">
        <Text pb="14px" color="#A9A9A9">
          Adicionar Imagem
        </Text>

        {files.map((file: { file: string }, index: number) => {
          return (
            <Box pt="20px" key={index}>
              <DropZone
                index={index}
                pt="0"
                w="100%"
                maxW="480px"
                h="74px"
                maxH="74px"
                value={file.file}
                setValue={(e) => addFile({ e })}
                deleteValue={() => deleteFile({ position: index })}
              />
            </Box>
          )
        })}

        <Box pt="20px">
          <DropZone
            index={69}
            pt="0"
            // w="100%"
            maxW="480px"
            h="74px"
            maxH="74px"
            value={''}
            setValue={(e) => addFile({ e })}
            deleteValue={() => deleteFile({ position: 99 })}
          />
        </Box>
      </Box>

      <Box pt="29px">
        <Text pb="14px" color="#A9A9A9">
          Elementos
        </Text>
        <ScrollHorizontal images={images} addFile={addFile} />
      </Box>

      <Box pt="29px">
        <Text pb="14px" color="#A9A9A9">
          Bandeiras
        </Text>
        <ScrollHorizontal images={flags} addFile={addFile} />
      </Box>

      <Box pt="42px" maxW="485px">
        <Text>Adicionar Texto</Text>
        <Stack
          pt="18px"
          spacing="2%"
          direction={isWideVersion ? 'row' : 'column'}
        >
          <Box>
            <Typography text="Texto" type="Subtitle" />
            <Input
              placeholder="Meu texto personalizado"
              w="100%"
              maxW="479px"
              value={customText}
              setValue={setCustomText}
              maxLenght={26}
            />
          </Box>
          <Spacer />
          <Box>
            <Typography text="Tamanho" type="Subtitle" />
            <Select
              w="100%"
              maxW="100px"
              options={dataSizes}
              value={sizeValue}
              setValue={setSizeValue}
            />
          </Box>
          <Spacer />
          <Box>
            <Typography text="Tipografia" type="Subtitle" />
            <Select
              w="100%"
              maxW="150px"
              options={dataTypos}
              value={typoValue}
              setValue={setTypoValue}
            />
          </Box>
        </Stack>
      </Box>
    </Box>
  )
}
