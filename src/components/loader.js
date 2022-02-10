import React, { useEffect } from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { colors, FullSygnet } from '../constants/icons'
import { theme } from './../constants/theme'

const Loader = ({isDarkTheme}) => {
  useEffect(() => {
    scroll.scrollToTop()
    setTimeout(() => {
      document
        .getElementById('Loader')
        .classList.add('active')
    }, 1)

    setTimeout(() => {
      document.getElementById('Loader').classList.add('off')
    }, 2000)
  }, [])

  return (
    <div id='Loader'>
      <FullSygnet
        color={
          isDarkTheme ? colors.white : colors.black
        }
      />
    </div>
  )
}

export default Loader
