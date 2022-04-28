import { api } from '@/services/api'
import { createContext, useMemo, useRef, useState } from 'react'
import { takeScreenshot } from '../../helpers/screenshot'
import { CardContextData, CardContextProviderProps } from './models'

const CardContext = createContext({} as CardContextData)

function CardContextProvider({ children }: CardContextProviderProps) {
  const [cardName, setCardName] = useState<string>('')
  const [cardNameLocal, setCardNameLocal] = useState<number>(2) //1 = dont use, 2 = front, 3 = back
  const [cardNumberLocal, setCardNumberLocal] = useState<number>(2) //1 = dont use, 2 = front, 3 = back
  const [cardValidityLocal, setCardValidityLocal] = useState<number>(3) //1 = dont use, 2 = front, 3 = back
  const [currentTab, setCurrentTab] = useState<number>(1)

  const [customText, setCustomText] = useState<string>('')
  const [sizeValue, setSizeValue] = useState<number>(1)
  const [typoValue, setTypoValue] = useState<number>(1)
  const [flagValue, setFlagValue] = useState<number>(1)
  const [file, setFile] = useState<string>('')
  const [flag, setFlag] = useState<string>('')

  const [materialSelected, setMaterialSelected] = useState('black') // black, white, silver, gold, roseGold, blackGold, Rainbow
  const [printSelected, setPrintSelected] = useState('dark') // dark, clear, colorful
  const [borderSelected, setBorderSelected] = useState(0)

  const frontCardRef = useRef<HTMLDivElement>(null)
  const backCardRef = useRef<HTMLDivElement>(null)

  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [userName, setUserName] = useState<string>('')
  const [userEmail, setUserEmail] = useState<string>('')
  const [userWhats, setUserWhats] = useState<string>('')

  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)

  const orderCard = async (): Promise<void> => {
    setIsLoading(true)
    const frontCardImage = await takeScreenshot(frontCardRef.current)
    const backCardImage = await takeScreenshot(backCardRef.current)

    const information = {
      cardName,
      cardNameLocal,
      cardNumberLocal,
      cardValidityLocal,
    }

    const metal = {
      materialSelected,
      printSelected,
      borderSelected,
    }

    const design = {
      customText,
      sizeValue,
      typoValue,
      file,
      flagValue,
      flag,
    }

    const cardsImages = {
      frontCardImage,
      backCardImage,
    }

    const userInformations = {
      userName,
      userEmail,
      userWhats,
    }

    const order = {
      information,
      metal,
      design,
      userInformations,
      cardsImages,
    }

    try {
      const { data } = await api.post<any>('api/send', {
        order,
      })

      console.log('opora')
      console.log(data)
      setIsSuccess(true)
    } catch (err) {
      setIsSuccess(false)
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setCardName('')
    setCardNameLocal(2) //1 = dont use, 2 = front, 3 = back
    setCardNumberLocal(2) //1 = dont use, 2 = front, 3 = back
    setCardValidityLocal(3) //1 = dont use, 2 = front, 3 = back
    setCurrentTab(1)

    setCustomText('')
    setSizeValue(1)
    setTypoValue(1)
    setFlagValue(1)
    setFile('')
    setFlag('')

    setMaterialSelected('black') // black, white, silver, gold, roseGold, blackGold, Rainbow
    setPrintSelected('dark') // dark, clear, colorful
    setBorderSelected(0)

    setIsOpen(false)
    setUserName('')
    setUserEmail('')
    setUserWhats('')

    setIsLoading(false)
    setIsSuccess(false)
  }

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
      orderCard,
      frontCardRef,
      backCardRef,
      isOpen,
      setIsOpen,
      userName,
      setUserName,
      userEmail,
      setUserEmail,
      userWhats,
      setUserWhats,
      isLoading,
      isSuccess,
      setIsSuccess,
      reset,
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
      orderCard,
      frontCardRef,
      backCardRef,
      isOpen,
      isOpen,
      setIsOpen,
      userName,
      setUserName,
      userEmail,
      setUserEmail,
      userWhats,
      setUserWhats,
      isLoading,
      isSuccess,
      setIsSuccess,
      reset,
    ]
  )

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export { CardContextProvider, CardContext }
