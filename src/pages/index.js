import React, { useContext } from "react"
import styled from "styled-components"
import Aside from "../components/aside"
import { graphql } from "gatsby"
import { ThemeContext } from "../HOCs/isBlackTheme"
import Header from "../components/header"
import Highlight from "../components/highlight"
import { theme } from "../constants/theme"
import { ThemeProvider } from "styled-components"
import Offer from "../components/offer"

const IndexPage = ({ data }) => {

  let isDarkTheme = useContext(ThemeContext) // import for rerender

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Aside isDarkTheme={isDarkTheme} data={data.datoCmsAside} />
        <Main>
          <Header isDarkTheme={isDarkTheme} data={data.datoCmsSlider} />
          <Highlight data={data.datoCmsBenefit} />
          <Offer isDarkTheme={isDarkTheme} data={data.datoCmsOffer} />
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
    logoWhite {
      alt
      url
    }
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
    repairedImageWhite {
      alt
      url
    }
    brokeImageWhite {
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
  datoCmsOffer {
    buttonText
    title {
      value
    }
    carImg {
      alt
      url
    }
    carImgWhite {
      alt
      url
    }
    items {
      title
      text {
        value
      }
      icon {
        alt
        url
      }
      iconWhite {
        alt
        url
      }
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