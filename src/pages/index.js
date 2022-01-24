import React, { useContext } from "react"
import styled from "styled-components"
import Aside from "../components/aside"
import Header from "../components/header"
import Offer from "../components/offer"
import Price from "../components/price"
import Highlight from "../components/highlight"
import { graphql } from "gatsby"
import { ThemeContext } from "../HOCs/isBlackTheme"
import { ThemeProvider } from "styled-components"
import { theme } from "../constants/theme"
import Faq from "../components/faq"
import Footer from "../components/footer"
import { Toaster } from "react-hot-toast"

const IndexPage = ({ data }) => {

  let isDarkTheme = useContext(ThemeContext) // import for rerender

  return (
    <ThemeProvider theme={theme}>
      <App>
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Aside isDarkTheme={isDarkTheme} data={data.datoCmsAside} />
        <Main>
          <Header isDarkTheme={isDarkTheme} data={data.datoCmsSlider} />
          <Highlight data={data.datoCmsBenefit} />
          <Offer isDarkTheme={isDarkTheme} data={data.datoCmsOffer} />
          <Price isDarkTheme={isDarkTheme} data={data.datoCmsPrice} />
          <Faq data={data.datoCmsFaq} />
          <Footer data={data.datoCmsFooter} />
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
    }
    logo {
      alt
      url
    }
    logoWhite {
      alt
      url
    }
    socialMedia {
      link
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
    repairedImageWhite {
      alt
      url
    }
    brokeImageWhite {
      alt
      url
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
    }
  }
  datoCmsPrice {
    rightText {
      value
    }
    leftText {
      value
    }
    title {
      value
    }
    tabs {
      title
      items {
        content {
          value
        }
      }
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
      text
      title
    }
  }
  datoCmsFaq {
    title {
      value
    }
    questions {
      title
      text
    }
    enginePhoto {
      alt
      url
    }
  }
  datoCmsFooter {
    title {
      value
    }
    textContent {
      value
    }
    openTimes {
      content {
        value
      }
    }
    openTimeTitle
    formTitle {
      value
    }
    links {
      text
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

  h1, h2{
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
    font-family: 'Krona one';
  }
`

const Main = styled.main`
  background: ${props => props.theme.isBlackTheme ? props.theme.black.background : props.theme.white.background};
  transition: all .2s linear;
`