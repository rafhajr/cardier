/* eslint-disable no-unused-vars */

import { ReactNode } from 'react'

export type AuthContextProviderProps = {
  children: ReactNode
}

export type UserProps = {
  name: string
  email: string
}

export type SignInCredentials = {
  email: string
  password: string
}

export type SignInResponse = {
  user: UserProps
  token: string
}

export type AuthContextData = {
  user?: UserProps
  handleSignOut: () => void
  handleSignIn: (data: SignInCredentials) => void
  loading: boolean
}
