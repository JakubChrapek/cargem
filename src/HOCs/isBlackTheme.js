import React, { useState, useEffect } from "react";

const ThemeWrapper = ({ children }) => {

    const ThemeContext = React.createContext('dark');

    const [isDarkTheme, setIsDarkTheme] = useState("dark")

    useEffect(() => {
        if (!localStorage.getItem('isBlack')) {
            setIsDarkTheme(false)
        }
    }, [])

    const handleClick = () => {
        if (localStorage.getItem('isBlack')) {

            localStorage.setItem('isBlack', 'false')
            setIsDarkTheme(false)

        } else {

            localStorage.setItem('isBlack', 'true')
            setIsDarkTheme(true)

        }
    }

    return (
        <ThemeContext.Provider value={isDarkTheme}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeWrapper