import { Border1 } from '@/constants/BordersTypes/Border1'
import { Border2 } from '@/constants/BordersTypes/Border2'
import { Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useCard } from 'src/hooks'
interface ICardSkeleton {
  children: any
  ref?: HTMLDivElement | null
  isFront?: boolean
}

interface ITextProps {
  top: string
  left: string
  fontSize?: string
  fontSizeSmall?: string
}

export const Card = () => {
  const {
    cardName,
    cardNameLocal,
    cardNumberLocal,
    cardValidityLocal,
    materialSelected,
    borderSelected,
    customText,
    sizeValue,
    typoValue,
    file,
    flag,
    frontCardRef,
    backCardRef,
  } = useCard()

  const textColor = () => {
    const materials: Record<string, string> = {
      black: '#909090',
      blackGold: '#b19500',
      rainbow: '#606aa1',
      roseGold: '#c0b4b5',
      silver: '#626262',
      white: '#626262',
    }

    return materials[materialSelected] || '#909090'
  }

  const CardSkeleton = ({ children, isFront }: ICardSkeleton) => {
    return (
      <Box w="435px" h="275px" ref={isFront ? frontCardRef : backCardRef}>
        <Box borderRadius="24px" position="relative">
          <Box>
            <Image
              w="435px"
              h="275px"
              src={`/FullMaterials/${materialSelected}.jpg`}
              alt={materialSelected}
              borderRadius="24px"
            />
          </Box>
          {children}
        </Box>
      </Box>
    )
  }

  const NumberCard = ({ top, left, fontSize }: ITextProps) => {
    return (
      <Box
        position="absolute"
        top={top}
        left={left}
        transform="translate(-50%, -50%)"
      >
        <Text color={textColor()} fontSize={fontSize}>
          0000 0000 0000 0000
        </Text>
      </Box>
    )
  }

  const ValidityCard = ({ top, left, fontSize, fontSizeSmall }: ITextProps) => {
    return (
      <Flex
        position="absolute"
        top={top}
        left={left}
        transform="translate(-50%, -50%)"
        alignItems="center"
        justifyContent="center"
      >
        <Box pr="5px">
          <Text color={textColor()} fontSize={fontSizeSmall}>
            VALID
          </Text>
          <Text color={textColor()} fontSize={fontSizeSmall}>
            THRU
          </Text>
        </Box>
        <Text color={textColor()} fontSize={fontSize}>
          55/55
        </Text>
      </Flex>
    )
  }

  const NameCard = ({ top, left, fontSize }: ITextProps) => {
    return (
      <Box
        position="absolute"
        top={top}
        left={left}
        // transform="translate(-50%, -50%)"
      >
        <Text color={textColor()} fontSize={fontSize}>
          {cardName ? cardName : '(NAME HERE)'}
        </Text>
      </Box>
    )
  }

  const CustomTextCard = ({ top, left }: ITextProps) => {
    const getFonts = () => {
      const fontFamily: Record<number, string> = {
        1: 'cursive',
        2: 'monospace',
        3: 'serif',
        4: 'initial',
        5: 'unset',
      }
      return fontFamily[typoValue] || 'cursive'
    }

    return (
      <Box
        position="absolute"
        top={top}
        left={left}
        // transform="translate(-50%, -50%)"
      >
        <Text
          color={textColor()}
          fontSize={`${sizeValue}px`}
          fontFamily={getFonts()}
        >
          {customText ? customText : '(CUSTOM TEXT HERE)'}
        </Text>
      </Box>
    )
  }

  const ImageCard = ({ top, left }: ITextProps) => {
    return (
      <Box position="absolute" top={top} left={left}>
        <Image w="100px" src={file} alt="customImage" />
      </Box>
    )
  }

  const FlagCard = ({ top, left }: ITextProps) => {
    return (
      <Box position="absolute" top={top} left={left}>
        <Image w="100px" src={flag} alt="customImage" />
      </Box>
    )
  }

  const FrontCard = () => {
    return (
      <CardSkeleton isFront>
        <Box
          position="absolute"
          top="40%"
          left="20%"
          transform="translate(-50%, -50%)"
        >
          <Image w="60px" src="/chip.png" alt="chip" />
        </Box>

        {borderSelected !== 0 && (
          <Box
            position="absolute"
            top="50%"
            left="50%"
            transform="translate(-50%, -50%)"
          >
            {borderSelected === 1 && (
              <Border1 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 2 && (
              <Border2 w="395px" h="270px" color={textColor()} />
            )}
          </Box>
        )}

        {customText && <CustomTextCard top="10%" left="10%" />}

        {file && <ImageCard top="20%" left="50%" />}

        {flag && <FlagCard top="20%" left="50%" />}

        {cardNumberLocal === 2 && (
          <NumberCard top="52%" left="47%" fontSize="20px" />
        )}

        {cardValidityLocal === 2 && (
          <ValidityCard
            top="61%"
            left="47%"
            fontSize="20px"
            fontSizeSmall="8px"
          />
        )}

        {cardNameLocal === 2 && (
          <NameCard top="70%" left="20%" fontSize="18px" />
        )}
      </CardSkeleton>
    )
  }

  const BackCard = () => {
    return (
      <CardSkeleton>
        <Box position="absolute" top="8%" left="0%">
          <Image src="/magnetStripe.png" alt="magnetStripe" />
        </Box>

        <Box
          position="absolute"
          top="40%"
          left="38%"
          transform="translate(-50%, -50%)"
        >
          <Flex>
            <Box w="250px" h="50px" backgroundColor="#fff" />
            <Box pl="5px">
              <Text color={textColor()} fontSize="20px" pt="12px">
                555
              </Text>
            </Box>
          </Flex>

          <Flex w="250px">
            <Text color={textColor()} fontSize="8px">
              AUTHORIZED SIGNATURE
            </Text>
            <Spacer />
            <Text color={textColor()} fontSize="8px">
              NOT VALID UNLESS SIGNED
            </Text>
          </Flex>
        </Box>

        {cardNumberLocal === 3 && (
          <NumberCard top="60%" left="33.5%" fontSize="25px" />
        )}

        {cardValidityLocal === 3 && (
          <ValidityCard
            top="72%"
            left="17%"
            fontSize="25px"
            fontSizeSmall="10px"
          />
        )}

        {cardNameLocal === 3 && (
          <NameCard top="78%" left="6%" fontSize="25px" />
        )}
      </CardSkeleton>
    )
  }

  return (
    <VStack
      w="445px"
      h="580px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      alignContent="center"
    >
      <FrontCard />
      <BackCard />
    </VStack>
  )
}
