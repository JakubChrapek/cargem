import React, { useContext } from "react"
import styled from "styled-components"
import Aside from "../components/aside"
import { graphql } from "gatsby"
import { ThemeContext } from "../HOCs/isBlackTheme"
import Header from "../components/header"
import Highlight from "../components/highlight"
import { theme } from "../constants/theme"
import { ThemeProvider } from "styled-components"

const IndexPage = ({ data }) => {

  let isDarkTheme = useContext(ThemeContext) // import for rerender

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Aside data={data.datoCmsAside} />
        <Main>
          <Header data={data.datoCmsSlider} />
          <Highlight data={data.datoCmsBenefit} />
        </Main>
      </App>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
query MainQuery {
  datoCmsAside {
    navigation {
      linkTitle
      linkIcon {
        alt
        url
      }
    }
    logo {
      alt
      url
    }
    socialMedia {
      link
      icon {
        url
        alt
      }
    }
    copyright
    nightModeTitle
  }
  datoCmsSlider {
    firstButtonText
    secondButtonText
    title {
      value
    }
    repairedImage {
      url
      alt
    }
    brokenImage {
      alt
      url
    }
  }
  datoCmsBenefit {
    title {
      value
    }
    rightText {
      value
    }
    leftText {
      value
    }
    benefits {
      icon {
        alt
        url
      }
      text
      title
    }
  }
}


`

const App = styled.div`
  display: grid;
  grid-template-columns: 367px 1fr;
          
  mark{
    background-color: unset;
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.active : props.theme.white.text.active};
  }

  h1, h2, h3, h4{
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
  }
`

const Main = styled.main`
  background: ${props => props.theme.isBlackTheme ? props.theme.black.background : props.theme.white.background};
`