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

  const orderCard = async (): Promise<void> => {
    const frontCardImage = await takeScreenshot(frontCardRef.current)
    const backCardImage = await takeScreenshot(backCardRef.current)

    const information = {
      Nome: cardName,
      'Local do nome': cardNameLocal,
      'Local do número': cardNumberLocal,
      'Local da validade': cardValidityLocal,
    }

    const metal = {
      Material: materialSelected,
      Impressão: printSelected,
      Borda: borderSelected,
    }

    const design = {
      'Texto personalizado': customText,
      'Tamanho do texo': sizeValue,
      'Tipografia do texto': typoValue,
      Imagem: file,
      Bandeira: flagValue,
      'Imagem Bandeira': flag,
    }

    const cardsImages = {
       frontCardImage,
       backCardImage,
    }

    const order = {
      information,
      metal,
      design,
      cardsImages,
    }

    try {
      const { data: newData } = await api.post<any>('api/send', {
        order,
      })

      console.log(newData)
    } catch (err) {
      console.log(err)
    } finally {
      console.log('uepa')
    }
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
    ]
  )

  return <CardContext.Provider value={value}>{children}</CardContext.Provider>
}

export { CardContextProvider, CardContext }
