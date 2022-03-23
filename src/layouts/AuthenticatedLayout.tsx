import { ReactNode } from 'react'

type AuthenticatedLayoutProps = {
  children: ReactNode
}

export function AuthenticatedLayout({ children }: AuthenticatedLayoutProps) {
  return (
    <>
      <h1>layout</h1>
      {children}
    </>
  )
}
