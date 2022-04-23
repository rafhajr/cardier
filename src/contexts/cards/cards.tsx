import { createContext, useMemo, useState } from 'react'
import { CardContextData, CardContextProviderProps } from './models'

const CardContext = createContext({} as CardContextData)

function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardName, setCardName] = useState<string>('')
  const [cardNameLocal, setCardNameLocal] = useState<number>(2)
  const [cardNumberLocal, setCardNumberLocal] = useState<number>(2)
  const [cardValidityLocal, setCardValidityLocal] = useState<number>(3)
  const [currentTab, setCurrentTab] = useState<number>(1)

  const [customText, setCustomText] = useState<string>('')
  const [sizeValue, setSizeValue] = useState<number>(1)
  const [typoValue, setTypoValue] = useState<number>(1)
  const [flagValue, setFlagValue] = useState<number>(1)
  const [file, setFile] = useState<string>('')
  const [flag, setFlag] = useState<string>('')

  const [materialSelected, setMaterialSelected] = useState('black')
  const [printSelected, setPrintSelected] = useState('dark')
  const [borderSelected, setBorderSelected] = useState(0)

  const value = useMemo(
    () => ({
      cardName,
      setCardName,
      cardNameLocal,
      setCardNameLocal,
      cardNumberLocal,
      setCardNumberLocal,
      cardValidityLocal,
      setCardValidityLocal,
      currentTab,
      setCurrentTab,
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
      materialSelected,
      setMaterialSelected,
      printSelected,
      setPrintSelected,
      borderSelected,
      setBorderSelected,
    }),
    [
      cardName,
      setCardName,
      cardNameLocal,
      setCardNameLocal,
      cardNumberLocal,
      setCardNumberLocal,
      cardValidityLocal,
      setCardValidityLocal,
      currentTab,
      setCurrentTab,
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
      materialSelected,
      setMaterialSelected,
      printSelected,
      setPrintSelected,
      borderSelected,
      setBorderSelected,
    ]
  )

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export { CardContextProvider, CardContext }
