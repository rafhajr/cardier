import {
  Border1,
  Border2,
  Border3,
  Border4,
  Border5,
  Border6,
  Border7,
  Border8
} from '@/assets/Borders'
import { Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import { useCard } from 'src/hooks'

interface ICardSkeleton {
  children: any
  ref?: HTMLDivElement | null
  isFront?: boolean
}

interface ITextProps {
  top: string | number
  left: string | number
  fontSize?: string
  fontSizeSmall?: string
  disabled?: boolean
}

interface INameProps {
  top: number
  left: number
  fontSize?: string
  fontSizeSmall?: string
  disabled?: boolean
}

interface IPosition {
  x: number
  y: number
}

interface ISize {
  width: number | string
  height: number | string
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
    flagValue,
    frontCardRef,
    backCardRef,
  } = useCard()

  const [textPosition, setTextPosition] = useState<IPosition>({ x: 50, y: 50 })
  const [namePosition, setNamePosition] = useState<IPosition>({
    x: 100,
    y: 180,
  })
  const [imagePosition, setImagePosition] = useState<IPosition>({ x: 0, y: 0 })
  const [flagPosition, setFlagPosition] = useState<IPosition>({ x: 0, y: 0 })
  const [flagValuePosition, setFlagValuePosition] = useState<IPosition>({
    x: 0,
    y: 0,
  })

  const [imageSize, setImageSize] = useState<ISize>({ width: 100, height: 100 })
  const [flagSize, setFlagSize] = useState<ISize>({ width: 100, height: 100 })
  const [flagValueSize, setFlagValueSize] = useState<ISize>({
    width: 70,
    height: 70,
  })

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
      <Box
        w="435px"
        h="275px"
        ref={isFront ? frontCardRef : backCardRef}
        userSelect="none"
      >
        <Box borderRadius="24px" position="relative">
          <Box w="435px" h="275px">
            <Image
              w="435px"
              h="275px"
              src={`/FullMaterials/${materialSelected}.png`}
              alt={materialSelected}
              borderRadius="24px"
              draggable="false"
              data-html2canvas-ignore="true"
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
        w="300px"
        transform="translate(-50%, -50%)"
      >
        <Text
          color={textColor()}
          fontSize={fontSize}
          draggable={false}
          userSelect="none"
          // w="500px"
        >
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
        // justifyContent="center"
      >
        <Box pr="5px">
          <Text color={textColor()} fontSize={fontSizeSmall} userSelect="none">
            VALID
          </Text>
          <Text color={textColor()} fontSize={fontSizeSmall} userSelect="none">
            THRU
          </Text>
        </Box>
        <Text color={textColor()} fontSize={fontSize} userSelect="none">
          55/55
        </Text>
      </Flex>
    )
  }

  const NameCard = ({ top, left, fontSize, disabled }: INameProps) => {
    return (
      <Rnd
        disableDragging={disabled}
        enableResizing={false}
        position={
          disabled
            ? { x: left, y: top }
            : { x: namePosition.x, y: namePosition.y }
        }
        onDragStop={(e, d) => {
          setNamePosition({ x: d.x, y: d.y })
        }}
        bounds="parent"
        className={disabled ? '' : 'card'}
      >
        <Text color={textColor()} fontSize={fontSize} userSelect="none">
          {cardName ? cardName : '(NAME HERE)'}
        </Text>
      </Rnd>
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
      <Rnd
        enableResizing={false}
        position={{ x: textPosition.x, y: textPosition.y }}
        onDragStop={(e, d) => {
          setTextPosition({ x: d.x, y: d.y })
        }}
        bounds="parent"
        className={'card'}
      >
        <Text
          color={textColor()}
          fontSize={`${sizeValue}px`}
          fontFamily={getFonts()}
          userSelect="none"
        >
          {customText ? customText : '(CUSTOM TEXT HERE)'}
        </Text>
      </Rnd>
    )
  }

  const ImageCard = ({ top, left }: ITextProps) => {
    return (
      <Rnd
        size={{ width: imageSize.width, height: imageSize.height }}
        position={{ x: imagePosition.x, y: imagePosition.y }}
        onDragStop={(e, d) => {
          setImagePosition({ x: d.x, y: d.y })
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setImageSize({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          })
        }}
        bounds="parent"
        className="card"
      >
        <Image
          src={file}
          alt="customImage"
          userSelect="none"
          draggable="false"
        />
      </Rnd>
    )
  }

  const FlagCard = ({ top, left }: ITextProps) => {
    return (
      <Rnd
        size={{ width: flagSize.width, height: flagSize.height }}
        position={{ x: flagPosition.x, y: flagPosition.y }}
        onDragStop={(e, d) => {
          setFlagPosition({ x: d.x, y: d.y })
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setFlagSize({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          })
        }}
        bounds="parent"
        className="card"
      >
        <Image
          src={flag}
          alt="customImage"
          userSelect="none"
          draggable="false"
        />
      </Rnd>
    )
  }

  const FlagFileCard = ({ top, left }: ITextProps) => {
    const getFlags = () => {
      const flags: Record<number, string> = {
        2: '/Flags/Mastercard.png',
        3: '/Flags/Visa.png',
        4: '/Flags/Hipercard.png',
        5: '/Flags/Elo.png',
        6: '/Flags/AmericanExpress.png',
      }
      return flags[flagValue] || '/Flags/Mastercard.png'
    }

    return (
      <Rnd
        size={{ width: flagValueSize.width, height: flagValueSize.height }}
        position={{ x: flagValuePosition.x, y: flagValuePosition.y }}
        onDragStop={(e, d) => {
          setFlagValuePosition({ x: d.x, y: d.y })
        }}
        onResizeStop={(e, direction, ref, delta, position) => {
          setFlagValueSize({
            width: ref.style.width,
            height: ref.style.height,
            ...position,
          })
        }}
        bounds="parent"
        className="card"
      >
        <Image
          src={getFlags()}
          alt="customImage"
          userSelect="none"
          draggable="false"
        />
      </Rnd>
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
          <Image
            w="60px"
            src="/chip.png"
            alt="chip"
            draggable="false"
            data-html2canvas-ignore="true"
          />
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
              <Border2 w="434.5px" h="297px" color={textColor()} />
            )}

            {borderSelected === 3 && (
              <Border3 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 4 && (
              <Border4 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 5 && (
              <Border5 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 6 && (
              <Border6 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 7 && (
              <Border7 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 8 && (
              <Border8 w="395px" h="270px" color={textColor()} />
            )}
          </Box>
        )}

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

        {cardNameLocal === 2 && <NameCard top={70} left={20} fontSize="18px" />}

        {customText && <CustomTextCard top="10%" left="10%" />}

        {file && <ImageCard top="20%" left="50%" />}

        {flag && <FlagCard top="20%" left="50%" />}

        {flagValue !== 1 && <FlagFileCard top="20%" left="50%" />}
      </CardSkeleton>
    )
  }

  const BackCard = () => {
    return (
      <CardSkeleton>
        <Box position="absolute" top="8%" left="0%">
          <Image
            src="/magnetStripe.png"
            alt="magnetStripe"
            draggable="false"
            data-html2canvas-ignore="true"
          />
        </Box>

        <Box
          position="absolute"
          top="40%"
          left="38%"
          transform="translate(-50%, -50%)"
        >
          <Flex>
            <Box w="250px" h="50px">
              <Box
                w="250px"
                h="50px"
                backgroundColor="#fff"
                data-html2canvas-ignore="true"
              />
            </Box>
            <Box pl="5px">
              <Text
                color={textColor()}
                fontSize="20px"
                pt="12px"
                userSelect="none"
              >
                555
              </Text>
            </Box>
          </Flex>

          <Flex w="250px">
            <Text color={textColor()} fontSize="8px" userSelect="none">
              AUTHORIZED SIGNATURE
            </Text>
            <Spacer />
            <Text color={textColor()} fontSize="8px" userSelect="none">
              NOT VALID UNLESS SIGNED
            </Text>
          </Flex>
        </Box>

        {cardNumberLocal === 3 && (
          <NumberCard top="60%" left="39%" fontSize="25px" />
        )}

        {cardValidityLocal === 3 && (
          <ValidityCard
            top="72%"
            left="17%"
            fontSize="25px"
            fontSizeSmall="8px"
          />
        )}

        {cardNameLocal === 3 && (
          <NameCard top={215} left={20} fontSize="25px" disabled />
        )}
      </CardSkeleton>
    )
  }

  return (
    <VStack
      w="440px"
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
