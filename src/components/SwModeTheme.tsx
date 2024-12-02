'use client'
import {useEffect, useState} from 'react'
import {useTheme} from 'next-themes'
import {Switch} from '@nextui-org/react'

export function SwModeTheme() {
  const [mounted, setMounted] = useState(false)
  const {theme, setTheme} = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>
  return (
    <div>
      The current theme is: {theme}
      <Switch isSelected={theme === 'dark'} onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label="Automatic updates"/>
    </div>
  )
}
