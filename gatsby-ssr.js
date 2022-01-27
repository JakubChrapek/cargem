import './src/css/normalize.css'
import React from 'react'
import ThemeWrapper from './src/HOCs/isBlackTheme'

export function wrapPageElement({ element, props }) {
  return <ThemeWrapper {...props}>{element}</ThemeWrapper>
}
