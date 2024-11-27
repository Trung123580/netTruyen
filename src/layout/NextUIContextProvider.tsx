'use client'
import React from 'react'
import {NextUIProvider} from '@nextui-org/react'
import {ThemeProvider as NextThemesProvider} from 'next-themes'

const NextUIContextProvider = ({children}: { children: React.ReactNode }) => {
  return (
    <NextUIProvider>
      <NextThemesProvider attribute="class" defaultTheme="dark">
        <div className="dark h-screen text-foreground bg-background">
          {children}
          <span className="">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A beatae doloremque dolores dolorum ea eaque eius fuga, maxime, natus officia optio praesentium quaerat quidem sed, sint ullam ut vero voluptatem.
        </span>
        </div>
      </NextThemesProvider>
    </NextUIProvider>
  )
}
export default NextUIContextProvider
