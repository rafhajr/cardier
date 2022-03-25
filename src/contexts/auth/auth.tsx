import { api } from '@/services/api'
import { storageKey } from '@/utils/storageKey'
import { useToast } from '@chakra-ui/react'
import Router from 'next/router'
import { destroyCookie, parseCookies, setCookie } from 'nookies'
import { createContext, useCallback, useEffect, useMemo, useState } from 'react'
import {
  AuthContextData,
  AuthContextProviderProps,
  SignInCredentials,
  SignInResponse,
  UserProps,
} from './model'

const AuthContext = createContext({} as AuthContextData)

export function handleSignOut() {
  destroyCookie(undefined, storageKey('token'))
  destroyCookie(undefined, storageKey('user'))

  Router.push('/signin')
}

function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [user, setUser] = useState<UserProps>()
  const [loading, setLoading] = useState(false)
  const toast = useToast()

  useEffect(() => {
    const { '@maral.user': user } = parseCookies()

    if (user) {
      setUser(JSON.parse(user))
    }
  }, [])

  const handleSignIn = useCallback(
    async ({ email, password }: SignInCredentials): Promise<void> => {
      setLoading(true)
      try {
        const { data } = await api.post<SignInResponse>('api/auth', {
          email,
          password,
        })

        setCookie(undefined, storageKey('token'), data.token, {
          maxAge: 60 * 60 * 24, // 24 hours
          path: '/',
        })

        setCookie(undefined, storageKey('user'), JSON.stringify(data.user), {
          maxAge: 60 * 60 * 24, // 24 hours
          path: '/',
        })

        setUser(data.user)
        Router.push('/app/dashboard')
      } catch (err) {
        toast({
          title: 'Error',
          description: err?.response?.data?.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        })
      } finally {
        setLoading(false)
      }
    },
    [toast]
  )

  const value = useMemo(
    () => ({ user, handleSignIn, handleSignOut, loading }),
    [handleSignIn, loading, user]
  )

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export { AuthContextProvider, AuthContext }
