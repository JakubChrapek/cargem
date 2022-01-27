import React from 'react'
import styled from 'styled-components'
import { CargemLogo } from './icons'

const Header = () => {
  return (
    <Wrapper>
      <TextBox>
        <CargemLogo />
        <p>Strona w przygotowaniu</p>
      </TextBox>
    </Wrapper>
  )
}

export default Header

const Wrapper = styled.header`
  width: 100%;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

const TextBox = styled.div`
  max-width: 70vw;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-direction: column;
  z-index: 10;

  p {
    font-size: clamp(2rem, 3.5vw, 4rem);
    @media (max-width: 440px) {
      font-size: 1.8rem;
    }
    @media (max-width: 380px) {
      font-size: 1.5rem;
    }
    line-height: 1.25;
    font-family: 'Krona One';
    text-align: center;
    letter-spacing: -1px;
    margin: clamp(3rem, 10vh, 6rem) 0 0;
    color: ${(props) => props.theme.black.text.main};
    transition: 0.2s linear;
  }

  mark {
    background-color: unset;
    color: ${(props) =>
      props.theme.isBlackTheme
        ? props.theme.black.text.active
        : props.theme.white.text.active};
  }
`
