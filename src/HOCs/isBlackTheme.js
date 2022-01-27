import React, { useState, useEffect } from 'react'
import { theme } from '../constants/theme'
import '@fontsource/krona-one'

export const ThemeContext = React.createContext()
export const ThemeChangeContext = React.createContext()

const ThemeWrapper = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true)

  useEffect(() => {
    if (localStorage.getItem('isBlack') === 'true') {
      setIsDarkTheme(true)
    }
  }, [])

  useEffect(() => {
    theme.isBlackTheme = isDarkTheme
  }, [isDarkTheme])

  const handleClick = () => {
    if (localStorage.getItem('isBlack') === 'true') {
      localStorage.setItem('isBlack', 'false')
      setIsDarkTheme(false)
    } else {
      localStorage.setItem('isBlack', 'true')
      setIsDarkTheme(true)
    }
  }

  return (
    <ThemeContext.Provider value={isDarkTheme}>
      <ThemeChangeContext.Provider value={handleClick}>
        {children}
      </ThemeChangeContext.Provider>
    </ThemeContext.Provider>
  )
}

export default ThemeWrapper
