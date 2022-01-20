import React, { useState, useEffect } from "react"
import { theme } from "../constants/theme"

export const ThemeContext = React.createContext()
export const ThemeChangeContext = React.createContext()

const ThemeWrapper = ({ children }) => {

    const [isDarkTheme, setIsDarkTheme] = useState(false)

    useEffect(() => {
        if (localStorage.getItem('isBlack') === 'true') {
            setIsDarkTheme(true)
        }
    }, [])

    theme.isBlackTheme = isDarkTheme

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