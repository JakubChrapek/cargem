import React from 'react'
import styled from 'styled-components'
import Header from '../components/header'
import { theme } from '../constants/theme'
import { ThemeProvider } from 'styled-components'

const IndexPage = () => {
  return (
    <ThemeProvider theme={theme}>
      <Main>
        <Header />
      </Main>
    </ThemeProvider>
  )
}

export default IndexPage

const Main = styled.main`
  background: ${(props) => props.theme.black.background};
`
