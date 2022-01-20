import React, {useEffect} from "react"
import styled from "styled-components"
import Aside from "../components/aside"
import { theme } from "../constants/theme"
import { ThemeProvider } from "styled-components"
import { graphql } from "gatsby"

const IndexPage = ({data}) => {


  return (
    <ThemeProvider theme={theme}>
      <App>
        <Aside data={data.datoCmsAside} />
        <Main>

        </Main>
      </App>
    </ThemeProvider>
  )
}


export const query = graphql`
query AsideQuery {
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
}


`

export default IndexPage


const App = styled.div`
  display: grid;
  grid-template-columns: 367px 1fr;
`

const Main = styled.main`
  background: ${props => props.theme.isBlackTheme ? props.theme.black.background : props.theme.white.background};
`