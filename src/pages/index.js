import React, {
  useCallback,
  useContext,
  useState
} from 'react'
import styled from 'styled-components'
import Aside from '../components/aside'
import Header from '../components/header'
import Offer from '../components/offer'
import Price from '../components/price'
import Highlight from '../components/highlight'
import { graphql } from 'gatsby'
import { ThemeContext } from '../HOCs/isBlackTheme'
import { ThemeProvider } from 'styled-components'
import { theme } from '../constants/theme'
import Faq from '../components/faq'
import Footer from '../components/footer'
import { Toaster } from 'react-hot-toast'
import Loader from '../components/loader'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import { useEffect } from 'react'
import { Helmet } from 'react-helmet'

const IndexPage = ({ data }) => {
  let isDarkTheme = useContext(ThemeContext) // import for rerender
  const [menuOpened, setMenuOpened] = useState(false)
  function setMenuState() {
    if (
      document
        .getElementById('aside')
        .classList.contains('active')
    ) {
      document
        .getElementById('aside')
        .classList.remove('active')
      setMenuOpened(false)
    } else {
      document
        .getElementById('aside')
        .classList.add('active')
      setMenuOpened(true)
    }
  }

  const escFunction = useCallback(
    (event) => {
      if (event.keyCode === 27 && menuOpened) {
        setMenuState()
      }
    },
    [menuOpened]
  )

  useEffect(() => {
    document.addEventListener('keydown', escFunction)

    return () => {
      document.removeEventListener('keydown', escFunction)
    }
  }, [escFunction])

  const filteredSeoMetaTags =
    data.datoCmsSeo.seoMetaTags.tags.filter(
      (tag) => tag !== null
    )

  return (
    <ThemeProvider theme={theme}>
      <App isDarkTheme={isDarkTheme} id='main'>
        <Loader isDarkTheme={isDarkTheme} />
        <HelmetDatoCms
          seo={{ tags: filteredSeoMetaTags }}
          favicon={data.datoCmsSite.faviconMetaTags}
        />
        <Helmet
          htmlAttributes={{
            lang: 'pl',
            title: 'Cargem'
          }}>
          <title>Cargem</title>
        </Helmet>
        <Toaster
          position='top-center'
          reverseOrder={false}
        />
        <Container>
          <OpenNav onClick={setMenuState}>
            <span />
          </OpenNav>
          <Aside
            setMenuState={setMenuState}
            isDarkTheme={isDarkTheme}
            data={data.datoCmsAside}
          />
          <Main>
            <Header
              isDarkTheme={isDarkTheme}
              data={data.datoCmsSlider}
            />
            <Highlight
              isDarkTheme={isDarkTheme}
              data={data.datoCmsBenefit}
            />
            <div id='oferta'>
              <Offer
                isDarkTheme={isDarkTheme}
                data={data.datoCmsOffer}
              />
              <Price
                isDarkTheme={isDarkTheme}
                data={data.datoCmsPrice}
              />
            </div>
            <Faq
              isDarkTheme={isDarkTheme}
              data={data.datoCmsFaq}
            />
            <Footer
              isDarkTheme={isDarkTheme}
              data={data.datoCmsFooter}
            />
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
        gatsbyImageData
      }
      brokenImage {
        alt
        url
        gatsbyImageData
      }
      repairedImageWhite {
        alt
        url
        gatsbyImageData
      }
      brokeImageWhite {
        alt
        url
        gatsbyImageData
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
        gatsbyImageData
      }
      carImgWhite {
        alt
        url
        gatsbyImageData
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
        gatsbyImageData
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
      map {
        url
        alt
        gatsbyImageData
      }
      mapWhite {
        url
        alt
        gatsbyImageData
      }
    }
    datoCmsSite {
      faviconMetaTags {
        ...GatsbyDatoCmsFaviconMetaTags
      }
    }

    datoCmsSeo {
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
    }
  }
`

const App = styled.div`
  background: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.background
      : props.theme.white.background};
  transition: all 0.2s linear;

  *:focus-visible {
    outline: 1px solid
      ${(props) =>
        props.isDarkTheme
          ? props.theme.black.outline
          : props.theme.white.outline};
    outline-offset: 2px;
  }

  a {
    cursor: pointer;
  }

  mark {
    background-color: unset;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.active
        : props.theme.white.text.active};
  }

  h1 {
    font-family: 'Krona one';
  }

  h2 {
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    font-family: 'Krona one';
  }
`

const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: clamp(273px, 19.1vw, 367px) 1fr;
  position: relative;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
  }
`

const Main = styled.main``

const OpenNav = styled.div`
  @media (min-width: 1240px) {
    display: none;
  }

  z-index: 10000;
  position: fixed !important;
  left: 32px;
  top: 35px;
  width: 20px;
  height: 18px;
  cursor: pointer;
  mix-blend-mode: exclusion;

  &::after {
    width: 20px;
    height: 2px;
    content: '';
    background-color: ${(props) =>
      props.theme.black.text.main};
    mix-blend-mode: exclusion;
    position: absolute;
    right: 0;
    left: 0;
    top: 100%;
  }

  &::before {
    width: 20px;
    height: 2px;
    content: '';
    background-color: ${(props) =>
      props.theme.black.text.main};
    mix-blend-mode: exclusion;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
  }

  span {
    width: 20px;
    height: 2px;
    background-color: ${(props) =>
      props.theme.black.text.main};
    mix-blend-mode: exclusion;
    position: absolute;
    right: 0;
    left: 0;
    top: 50%;
  }

  @media (max-width: 876px) {
    left: 10px;
  }

  @media (max-width: 539px) {
    left: 6px;
  }
`
