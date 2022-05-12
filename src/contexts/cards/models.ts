/* eslint-disable no-unused-vars */

import { ReactNode, RefObject } from 'react'

export type CardContextProviderProps = {
  children: ReactNode
}

export type CardNameProps = {
  cardName: string
  setCardName: undefined
}

export type CardNameLocalProps = {
  cardNameLocal: string
  setCardNameLocal: undefined
}

export type CardNumberLocalProps = {
  cardNumberLocal: string
  setCardNumberLocal: undefined
}

export type CardValidityProps = {
  cardValidityLocal: string
  setCardValidityLocal: undefined
}

export type CardContextData = {
  cardName: string
  setCardName: (data: string) => void
  cardNameLocal: number
  setCardNameLocal: (data: number) => void
  cardNumberLocal: number
  setCardNumberLocal: (data: number) => void
  cardValidityLocal: number
  setCardValidityLocal: (data: number) => void
  currentTab: number
  setCurrentTab: (data: number) => void
  customText: string
  setCustomText: (data: string) => void
  sizeValue: number
  setSizeValue: (data: number) => void
  typoValue: number
  setTypoValue: (data: number) => void
  flagValue: number
  setFlagValue: (data: number) => void
  flag: string
  setFlag: (data: string) => void
  materialSelected: string
  setMaterialSelected: (data: string) => void
  printSelected: string
  setPrintSelected: (data: string) => void
  borderSelected: number
  setBorderSelected: (data: number) => void
  orderCard: () => Promise<void>
  frontCardRef: RefObject<HTMLDivElement>
  backCardRef: RefObject<HTMLDivElement>
  isOpen: boolean
  setIsOpen: (data: boolean) => void
  userName: string
  setUserName: (data: string) => void
  userEmail: string
  setUserEmail: (data: string) => void
  userWhats: string
  setUserWhats: (data: string) => void
  isLoading: boolean
  isSuccess: boolean
  setIsSuccess: (data: boolean) => void
  reset: () => void
  senderChecked: string
  setSenderChecked: (data: string) => void
}
