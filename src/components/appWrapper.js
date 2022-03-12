import styled from 'styled-components'

export const AppWrapper = styled.div`
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
