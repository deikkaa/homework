import React, { createContext, useContext } from 'react'
import type { ReactNode } from 'react'

const ThemeContext = createContext<'light' | 'dark'>('light')

interface ThemeProviderProps {
  children: ReactNode
  theme: 'light' | 'dark'
}

export function ThemeProvider({ children, theme }: ThemeProviderProps) {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)