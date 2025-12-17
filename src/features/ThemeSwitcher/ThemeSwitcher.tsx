import React from 'react'
import { useTheme } from '../../shared/lib/theme/ThemeProvider'

interface ThemeSwitcherProps {
  onToggle: () => void
}

export default function ThemeSwitcher({ onToggle }: ThemeSwitcherProps) {
  const theme = useTheme()

  return (
    <button onClick={onToggle}>
      Переключить тему
    </button>
  )
}