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
import components from '@/assets/models/black/script'
import { Box, Flex, Image, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import { useCard, useImages } from 'src/hooks'
import { CustomImage } from './Images'

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

interface IImageProps {
  file: string
  x?: number
  y?: number
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
  width: string
  height: string
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
    flag,
    flagValue,
    frontCardRef,
    backCardRef,
  } = useCard()

  const {
    files,
    resizeFile,
    moveFile,
    projectsReady,
    resizeProjectsReady,
    moveProjectsReady,
    model,
  } = useImages()

  const [textPosition, setTextPosition] = useState<IPosition>({ x: 50, y: 50 })
  const [numberPosition, setNumberPosition] = useState<IPosition>({
    x: 90,
    y: 130,
  })
  const [namePosition, setNamePosition] = useState<IPosition>({
    x: 100,
    y: 180,
  })
  const [flagPosition, setFlagPosition] = useState<IPosition>({ x: 0, y: 0 })
  const [flagValuePosition, setFlagValuePosition] = useState<IPosition>({
    x: 0,
    y: 0,
  })

  const [flagSize, setFlagSize] = useState<ISize>({
    width: '100',
    height: '100',
  })
  const [flagValueSize, setFlagValueSize] = useState<ISize>({
    width: '100',
    height: '100',
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

  const NumberCard = ({ top, left, fontSize, disabled }: INameProps) => {
    return (
      <Rnd
        disableDragging={disabled}
        enableResizing={false}
        position={
          disabled
            ? { x: left, y: top }
            : { x: numberPosition.x, y: numberPosition.y }
        }
        onDragStop={(e, d) => {
          setNumberPosition({ x: d.x, y: d.y })
        }}
        bounds="parent"
        className={disabled ? '' : 'card'}
      >
        <Text color={textColor()} fontSize={fontSize} userSelect="none">
          0000 0000 0000 0000
        </Text>
      </Rnd>
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
        1: 'Roboto, sans-serif',
        2: 'Montserrat Alternates, sans-serif',
        3: 'Oswald, sans-serif',
        4: 'Merriweather, serif',
        5: 'Arvo, serif',
        6: 'Teko, sans-serif',
        7: 'Quantico, sans-serif',
        8: 'Grape Nuts, cursive',
        9: 'Lobster, cursive',
        10: 'Dancing Script, cursive',
        11: 'Cookie, cursive',
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

  const FlagCard = ({ top, left }: ITextProps) => {
    return (
      <Rnd
        size={{
          width: flagSize.width + '10px',
          height: flagSize.height + '10px',
        }}
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
          width={flagSize.width}
          height={flagSize.height}
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
        {model > -1 && (
          <Box
            position="absolute"
            top="0%"
            left="0%"
            w="435px"
            h="275px"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            {components.map((Component: any, index: number) => {
              return (
                index === model && (
                  <Component.Model fill={textColor()} key={index} />
                )
              )
            })}
          </Box>
        )}

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
              <Border2 w="440px" h="270px" color={textColor()} />
            )}

            {borderSelected === 3 && (
              <Border3 w="395px" h="297px" color={textColor()} />
            )}

            {borderSelected === 4 && (
              <Border4 w="395px" h="270px" color={textColor()} />
            )}

            {borderSelected === 5 && (
              <Border5 w="400px" h="270px" color={textColor()} />
            )}

            {borderSelected === 6 && (
              <Border6 w="440px" h="270px" color={textColor()} />
            )}

            {borderSelected === 7 && (
              <Border7 w="420px" h="270px" color={textColor()} />
            )}

            {borderSelected === 8 && (
              <Border8 w="420px" h="270px" color={textColor()} />
            )}
          </Box>
        )}

        {flag && <FlagCard top="20%" left="50%" />}
        {flagValue !== 1 && <FlagFileCard top="20%" left="50%" />}

        {files.map((file, index) => {
          return (
            <CustomImage
              key={index}
              file={file}
              index={index}
              resizeFile={(e) => resizeFile({ size: e, index })}
              moveFile={(e) => moveFile({ position: e, index })}
            />
          )
        })}

        {projectsReady.map((project, index) => {
          return (
            <CustomImage
              key={index}
              file={project}
              index={index}
              resizeFile={(e) => resizeProjectsReady({ size: e, index })}
              moveFile={(e) => moveProjectsReady({ position: e, index })}
            />
          )
        })}

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

        {cardNumberLocal === 1 && (
          <NumberCard top={50} left={20}  fontSize="20px" />
        )}
        {cardValidityLocal === 1 && (
          <ValidityCard
            top="61%"
            left="47%"
            fontSize="20px"
            fontSizeSmall="8px"
          />
        )}
        {cardNameLocal === 1 && <NameCard top={70} left={20} fontSize="18px" />}
        {customText && <CustomTextCard top="10%" left="10%" />}
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
              {cardNumberLocal === 1 || cardNumberLocal === 2 ? (
                <Text
                  color={textColor()}
                  fontSize="20px"
                  pt="12px"
                  userSelect="none"
                  w="35px"
                >
                  555
                </Text>
              ) : (
                <Box pt="12px" w="35px" />
              )}
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

        {cardNumberLocal === 2 && (
          <NumberCard top={140} left={20} fontSize="25px" disabled />
        )}

        {cardValidityLocal === 2 && (
          <ValidityCard
            top="72%"
            left="17%"
            fontSize="25px"
            fontSizeSmall="8px"
          />
        )}

        {cardNameLocal === 2 && (
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
