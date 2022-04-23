import { CardContext } from '@/contexts/cards'
import { CardContextData } from '@/contexts/cards/models'
import { useContext } from 'react'

export function useCard(): CardContextData {
  const context = useContext(CardContext)

  if (!context) {
    throw new Error('useCard must be used within an CardProvider')
  }

  return context
}
