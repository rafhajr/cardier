import { Box, Flex, Grid, Image, Text, useBreakpointValue } from '@chakra-ui/react'
import React from 'react'

interface IMaterial {
  type: string
  name: string
  materialSelected: string
  setMaterialSelected: (data: string) => void
}

interface IMaterials {
  materialSelected: string
  setMaterialSelected: (data: string) => void
}

export const Materials = ({
  materialSelected,
  setMaterialSelected,
}: IMaterials) => {
  const isWideVersion = useBreakpointValue({ base: false, lg: true })

  const Material = ({
    type,
    name,
    materialSelected,
    setMaterialSelected,
  }: IMaterial) => {
    const image = '/' + type + '.png'

    return (
      <Box
        as="button"
        width="77px"
        height="77px"
        textAlign="center"
        backgroundColor={materialSelected === type ? 'blackAlpha.100' : '#fff'}
        borderRadius="5px"
        _hover={{ bg: '#ebedf0' }}
        onClick={() => setMaterialSelected(type)}
      >
        <Flex justify="center" align="center" pt="7px" pb="8px">
          <Image w="42px" h="42px" src={image} alt={type} />
        </Flex>
        <Text fontSize="12px">{name}</Text>
      </Box>
    )
  }

  return (
    <Grid templateColumns={isWideVersion ? "repeat(4, 1fr)" : "repeat(2, 1fr)"} gap={5} pt={23}>
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="black"
        name="Black"
      />
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="white"
        name="White"
      />
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="silver"
        name="Silver"
      />
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="gold"
        name="Gold"
      />
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="roseGold"
        name="Rose Gold"
      />
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="blackGold"
        name="Black Gold"
      />
      <Material
        materialSelected={materialSelected}
        setMaterialSelected={setMaterialSelected}
        type="rainbow"
        name="Rainbow"
      />
    </Grid>
  )
}
