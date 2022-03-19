import * as React from 'react'
import styled from 'styled-components'
import { Link, graphql } from 'gatsby'
import { ThemeContext } from '../HOCs/isBlackTheme'
import { ThemeProvider } from 'styled-components'
import { HelmetDatoCms } from 'gatsby-source-datocms'
import Loader from '../components/loader'
import Helmet from 'react-helmet'
import { Toaster } from 'react-hot-toast'
import Aside from '../components/aside'
import { Container } from '../components/container'
import { AppWrapper } from '../components/appWrapper'
import { theme } from '../constants/theme'
import { OpenNav } from '../components/openNav'

const NotFoundPage = ({ data }) => {
  let isDarkTheme = React.useContext(ThemeContext) // import for rerender
  const [menuOpened, setMenuOpened] = React.useState(false)
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

  const escFunction = React.useCallback(
    (event) => {
      if (event.keyCode === 27 && menuOpened) {
        setMenuState()
      }
    },
    [menuOpened]
  )

  React.useEffect(() => {
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
          <Main isDarkTheme={isDarkTheme}>
            <h1>Strony nie znaleziono</h1>
            <Link to='/'>Wróć na stronę główną &rarr;</Link>
          </Main>
        </Container>
      </AppWrapper>
    </ThemeProvider>
  )
}

export default NotFoundPage

export const query = graphql`
  query NotFoundQuery {
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
  }
`

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.background
      : props.theme.white.background};
  transition: all 0.2s linear;
  h1 {
    margin-bottom: 1.5rem;
    font-family: 'Krona one';
    color: ${({ theme, isDarkTheme }) =>
      isDarkTheme
        ? theme.black.text.main
        : theme.white.text.main};
  }

  a {
    font-family: 'Lato';
    font-weight: 500;
    font-size: 1.5rem;
    text-underline-offset: 8px;
    text-decoration-thickness: 2px;
    color: ${({ theme, isDarkTheme }) =>
      isDarkTheme
        ? theme.black.text.active
        : theme.white.text.active};
  }
`
