'use client'
import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes'

const NextUIContextProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProvider>
    </NextUIProvider>
  )
}
export default NextUIContextProvider
