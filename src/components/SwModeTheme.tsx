'use client'
import {useTheme} from 'next-themes'
import {useSwitch, VisuallyHidden} from '@nextui-org/react'
import MoonIcon from '@/Icons/MoonIcon'
import SunIcon from '@/Icons/SunIcon'

export function SwModeTheme() {
  const {theme, setTheme} = useTheme()
  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps
  } = useSwitch()
  return <>
    {/*<Switch*/}
    {/*  defaultSelected*/}
    {/*  thumbIcon={({isSelected, className}) => isSelected ? <SunIcon className={className}/> : <MoonIcon className={className}/>} isSelected={theme === 'dark'}*/}
    {/*  onValueChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}*/}
    {/*  aria-label="Automatic updates"/>*/}
    <Component {...getBaseProps()}>
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className={slots.wrapper({
          class: [
            'w-9 h-9',
            'flex items-center justify-center',
            'rounded-lg !bg-transparent hover:bg-default-200',
          ],
        })}
      >
        {isSelected ? <SunIcon className="animate-appearance-in transition-all duration-500"/> :
          <MoonIcon className="animate-appearance-in transition-all duration-500"/>}
      </div>
    </Component>
  </>
}
