import { ImagesContext } from '@/contexts/images'
import { ImagesContextData } from '@/contexts/images/models'
import { useContext } from 'react'

export function useImages(): ImagesContextData {
  const context = useContext(ImagesContext)

  if (!context) {
    throw new Error('useCard must be used within an CardProvider')
  }

  return context
}
