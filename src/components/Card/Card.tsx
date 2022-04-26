import { Border1 } from '@/constants/BordersTypes/Border1'
import { Border2 } from '@/constants/BordersTypes/Border2'
import { Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import Draggable from 'react-draggable'
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
  disabled?: boolean
}

interface IPosition {
  x: number
  y: number
}

interface IDraggable {
  children: any
  disabled?: boolean
  position: IPosition
  setPosition: (data: IPosition) => void
  top: string
  left: string
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

  const [textPosition, setTextPosition] = useState<IPosition>({ x: 0, y: 0 })
  const [namePosition, setNamePosition] = useState<IPosition>({ x: 0, y: 0 })
  const [imagePosition, setImagePosition] = useState<IPosition>({ x: 0, y: 0 })
  const [flagPosition, setFlagPosition] = useState<IPosition>({ x: 0, y: 0 })

  const [isMoving, setIsMoving] = useState<boolean>(false)

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
      <Box w="435px" h="275px" ref={isFront ? frontCardRef : backCardRef}  userSelect="none">
        <Box borderRadius="24px" position="relative">
          <Box>
            <Image
              w="435px"
              h="275px"
              src={`/FullMaterials/${materialSelected}.jpg`}
              alt={materialSelected}
              borderRadius="24px"
              draggable="false"

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
        <Text
          color={textColor()}
          fontSize={fontSize}
          draggable={false}
          userSelect="none"
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
        justifyContent="center"
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

  const DraggableCard = ({
    children,
    disabled,
    position,
    setPosition,
    top,
    left,
  }: IDraggable) => {
    return (
      <Draggable
        position={{
          x: disabled ? 0 : position.x,
          y: disabled ? 0 : position.y,
        }}
        onStart={() => {
          setIsMoving(true)
        }}
        onStop={(e, data) => {
          setIsMoving(false)
          setPosition({ x: data.x, y: data.y })
          return false
        }}
        bounds="parent"
        disabled={disabled}
      >
        <Box
          position="absolute"
          top={top}
          left={left}
          _hover={{
            border: '1px',
            borderColor: isMoving ? '#C4C4C4' : '#A9A9A9',
            borderStyle: 'dashed',
            cursor: 'move',
          }}
        >
          {children}
        </Box>
      </Draggable>
    )
  }

  const NameCard = ({ top, left, fontSize, disabled }: ITextProps) => {
    return (
      <DraggableCard
        position={namePosition}
        disabled={disabled}
        setPosition={setNamePosition}
        top={top}
        left={left}
      >
        <Text
          color={textColor()}
          fontSize={fontSize}
          userSelect="none"
        >
          {cardName ? cardName : '(NAME HERE)'}
        </Text>
      </DraggableCard>
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
      <DraggableCard
        position={textPosition}
        setPosition={setTextPosition}
        top={top}
        left={left}
      >
        <Text
          color={textColor()}
          fontSize={`${sizeValue}px`}
          fontFamily={getFonts()}
          userSelect="none"
        >
          {customText ? customText : '(CUSTOM TEXT HERE)'}
        </Text>
      </DraggableCard>
    )
  }

  const ImageCard = ({ top, left }: ITextProps) => {
    return (
      <DraggableCard
        position={imagePosition}
        setPosition={setImagePosition}
        top={top}
        left={left}
      >
        <Image w="100px" src={file} alt="customImage" />
      </DraggableCard>
    )
  }

  const FlagCard = ({ top, left }: ITextProps) => {
    return (
      <DraggableCard
        position={flagPosition}
        setPosition={setFlagPosition}
        top={top}
        left={left}
      >
        <Image w="100px" src={flag} alt="customImage" />
      </DraggableCard>
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
          <Image w="60px" src="/chip.png" alt="chip" draggable="false" />
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

        {customText && <CustomTextCard top="10%" left="10%" />}

        {file && <ImageCard top="20%" left="50%" />}

        {flag && <FlagCard top="20%" left="50%" />}
      </CardSkeleton>
    )
  }

  const BackCard = () => {
    return (
      <CardSkeleton>
        <Box position="absolute" top="8%" left="0%">
          <Image src="/magnetStripe.png" alt="magnetStripe" draggable="false" />
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
          <NameCard top="78%" left="6%" fontSize="25px" disabled />
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
