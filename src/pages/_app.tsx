import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import React from 'react'
import { AppProvider } from 'src/contexts'

type NextPageWithLayout = NextPage & {
  layout?: () => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const CustomLayout = Component.layout ?? React.Fragment
  return (
    <AppProvider>
      <CustomLayout>
        <Component {...pageProps} />
      </CustomLayout>
    </AppProvider>
  )
}

export default MyApp
