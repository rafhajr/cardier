import { AuthContext } from '@/contexts/auth'
import { AuthContextData } from '@/contexts/auth/model'
import { useContext } from 'react'

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }

  return context
}
