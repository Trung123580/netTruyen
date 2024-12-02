'use client'
import React, {createContext, useContext} from 'react'

type ContextType = {
  isAuthenticated: boolean
}
const AuthContextProvider = createContext({} as ContextType)
const AuthContext = ({children}: Readonly<{
  children: React.ReactNode
}>) => {
  const value = {
    isAuthenticated: false,
  }
  return (
    <AuthContextProvider.Provider value={value}>
      {children}
    </AuthContextProvider.Provider>
  )
}
export default AuthContext
export const useApp = () => useContext(AuthContextProvider)
