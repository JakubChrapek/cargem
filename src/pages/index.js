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

  function setMenuState() {
    if (document.getElementById('aside').classList.contains('active')) {
        document.getElementById('aside').classList.remove('active')
    } else {
        document.getElementById('aside').classList.add('active')
    }
}

  return (
    <ThemeProvider theme={theme}>
      <App id="main">
        <Toaster
          position="top-center"
          reverseOrder={false}
        />
        <Container>
          <OpenNav onClick={setMenuState}><span/></OpenNav>
          <Aside setMenuState={setMenuState} isDarkTheme={isDarkTheme} data={data.datoCmsAside} />
          <Main>
            <Header isDarkTheme={isDarkTheme} data={data.datoCmsSlider} />
            <Highlight data={data.datoCmsBenefit} />
            <Offer isDarkTheme={isDarkTheme} data={data.datoCmsOffer} />
            <Price isDarkTheme={isDarkTheme} data={data.datoCmsPrice} />
            <Faq data={data.datoCmsFaq} />
            <Footer isDarkTheme={isDarkTheme} data={data.datoCmsFooter} />
          </Main>
        </Container>
      </App>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
query MainQuery {
  datoCmsAside {
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
    map{
      url
    }
    mapWhite{
      url
    }
  }
}


`

const App = styled.div`
  
  background: ${props => props.theme.isBlackTheme ? props.theme.black.background : props.theme.white.background};
  transition: all .2s linear;

  *{
    outline-width: 0.01em;
    outline-color: ${props => props.theme.isBlackTheme ? props.theme.black.outline: props.theme.white.outline}; 
  }
  mark{
    background-color: unset;
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.active : props.theme.white.text.active};
  }

  h1, h2{
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
    font-family: 'Krona one';
  }

`

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: clamp( 273px, 19.1vw, 367px ) 1fr;
  position: relative;
  
  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
  }
`

const Main = styled.main`
`

const OpenNav = styled.div`
    @media (min-width: 1240px) {
        display: none;
    }

    z-index: 100;
    position: absolute !important;
    left: 32px;
    top: 35px;
    width: 20px;
    height: 18px;
    cursor: pointer;

    &::after{
        width: 20px;
        height: 2px;
        content: "";
        background-color: ${props => props.theme.black.text.main};
        position: absolute;
        right: 0;
        left: 0;
        top: 100%;
    }

    &::before{
        width: 20px;
        height: 2px;
        content: "";
        background-color: ${props => props.theme.black.text.main};
        position: absolute;
        right: 0;
        left: 0;
        top: 0;
    }

    span{
        width: 20px;
        height: 2px;
        background-color: ${props => props.theme.black.text.main};
        position: absolute;
        right: 0;
        left: 0;
        top: 50%;
    }
`