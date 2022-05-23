import { DropZone } from '@/components/DropZone'
import { Typography } from '@/components/Typography'
import {
  Box,
  Flex, Image,
  Spacer,
  Text,
  useBreakpointValue
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { useCard, useImages } from 'src/hooks'
import { dataFlags, dataSizes, dataTypos } from '../../constants/index'
import { Input } from '../Input'
import { Select } from './Components'

interface IBorderButton {
  img: string
  index: number
}

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
    flag,
    setFlag,
  } = useCard()

  const {
    files,
    addFile,
    deleteFile,
    projectsReady,
    addProjectsReady,
    deleteProjectsReady,
  } = useImages()

  const [selected, setSelected] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ])

  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  const BorderButton = ({ img, index }: IBorderButton) => {
    const image = '/' + img + '.png'

    const selecteds = selected.map((value, position) => {
      if (position === index) {
        return !value
      }
      return value
    })

    const handleClick = () => {
      if (selected[index]) {
        const position = projectsReady.findIndex(
          (project) => project.file === image
        )
        deleteProjectsReady({ position })

        setSelected(selecteds)
        return
      }

      addProjectsReady({ e: image })
      setSelected(selecteds)
    }

    return (
      <Box
        as="button"
        width="77px"
        height="77px"
        textAlign="center"
        backgroundColor={selected[index] ? 'blackAlpha.100' : '#fff'}
        borderRadius="5px"
        _hover={{ bg: '#ebedf0' }}
        onClick={() => handleClick()}
      >
        <Flex justify="center" align="center" pt="7px" pb="8px">
          <Image w="42px" h="42px" src={image} alt={img} />
        </Flex>
      </Box>
    )
  }

  return (
    <Box w="100%" maxW="600px">
      <Box pt="10px">
        <Typography text="Personalização" type="Title" />
      </Box>

      <Box pt="42px">
        <Text>Adicionar Texto</Text>

        <Box pt="18px">
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
      </Box>

      <Flex pt="32px" w="270px">
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
      </Flex>

      <Box pt="29px">
        <Text pb="14px">Adicionar Imagem</Text>

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
            w="100%"
            maxW="480px"
            h="74px"
            maxH="74px"
            value={''}
            setValue={(e) => addFile({ e })}
            deleteValue={() => deleteFile({ position: 99 })}
          />
        </Box>
      </Box>

      {isWideVersion && (
        <Box pt="29px">
          <Text>Adicionar Bandeira</Text>
          <Flex pt="18px" w="485px">
            <Box>
              <Typography text="Bandeiras" type="Subtitle" />
              <Select
                w="100%"
                maxW="228px"
                options={dataFlags}
                value={flagValue}
                setValue={setFlagValue}
              />
            </Box>
            <Spacer />
            <Box>
              <Typography text="Adicionar bandeira" type="Subtitle" />
              <Box pt="13px">
                <DropZone
                  w="226px"
                  maxW="226px"
                  h="43px"
                  maxH="43px"
                  value={flag}
                  setValue={setFlag}
                  pt="0"
                  deleteValue={() => setFlag('')}
                  index={999}
                />
              </Box>
            </Box>
          </Flex>
        </Box>
      )}

      {!isWideVersion && (
        <Box pt="29px">
          <Text>Adicionar Bandeira</Text>
          <Box>
            <Typography text="Bandeiras" type="Subtitle" />
            <Select
              w="100%"
              maxW="228px"
              options={dataFlags}
              value={flagValue}
              setValue={setFlagValue}
            />
          </Box>
          <Box pt="30px">
            <Typography text="Adicionar bandeira" type="Subtitle" />
            <Box pt="13px">
              <DropZone
                w="100%"
                maxW="226px"
                h="100%"
                maxH="43px"
                value={flag}
                setValue={setFlag}
                pt="0"
                deleteValue={() => setFlag('')}
                index={998}
              />
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  )
}
