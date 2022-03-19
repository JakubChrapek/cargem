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
import { OpenNav } from '../components/openNav'
import { Container } from '../components/container'
import { AppWrapper } from '../components/appWrapper'

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
      <AppWrapper isDarkTheme={isDarkTheme} id='main'>
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
      </AppWrapper>
    </ThemeProvider>
  )
}

export default IndexPage

export const query = graphql`
  query MainQuery {
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
  }
`

const Main = styled.main``
