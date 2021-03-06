import React from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import {
  TimingBelt,
  Door,
  PaintSpray,
  Key,
  AirPump,
  colors
} from '../constants/icons'
import { Link } from 'react-scroll'
import { GatsbyImage } from 'gatsby-plugin-image'

const Offer = ({ data, isDarkTheme }) => {
  return (
    <Wrapper id='oferta'>
      <StructuredText data={data.title} />
      <ItemsBox isDarkTheme={isDarkTheme}>
        {data.items.map((el, index) => (
          <div key={index}>
            <span>
              {(() => {
                switch (index) {
                  case 0:
                    return (
                      <TimingBelt
                        color={
                          isDarkTheme
                            ? colors.white
                            : colors.black
                        }
                      />
                    )
                  case 1:
                    return (
                      <Door
                        color={
                          isDarkTheme
                            ? colors.white
                            : colors.black
                        }
                      />
                    )
                  case 2:
                    return (
                      <PaintSpray
                        color={
                          isDarkTheme
                            ? colors.white
                            : colors.black
                        }
                      />
                    )
                  case 3:
                    return (
                      <Key
                        color={
                          isDarkTheme
                            ? colors.white
                            : colors.black
                        }
                      />
                    )
                  case 4:
                    return (
                      <AirPump
                        color={
                          isDarkTheme
                            ? colors.white
                            : colors.black
                        }
                      />
                    )
                  default:
                    return null
                }
              })()}
              <h3>{el.title}</h3>
            </span>
            <StructuredText data={el.text} />
          </div>
        ))}
      </ItemsBox>
      <LinkS
        href='#'
        tabIndex='0'
        smooth={'easeOutCubic'}
        to='kontakt'
        isDarkTheme={isDarkTheme}>
        {data.buttonText}
      </LinkS>
      <Car
        image={
          isDarkTheme
            ? data.carImg.gatsbyImageData
            : data.carImgWhite.gatsbyImageData
        }
        alt={
          isDarkTheme
            ? data.carImg.alt
              ? data.carImg.alt
              : 'samoch??d dekoratywny'
            : data.carImgWhite.alt
            ? data.carImgWhite.alt
            : 'samoch??d dekoratywny'
        }
      />
    </Wrapper>
  )
}

export default Offer

const Wrapper = styled.section`
  padding-top: clamp(55px, 9.31vw, 180px);
  padding-left: clamp(55px, 8.6vw, 167px);
  padding-right: clamp(55px, 8.6vw, 167px);
  position: relative;

  h2 {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 876px) {
    padding-top: 55px;
    padding-left: 40px;
    padding-right: 40px;
    padding-bottom: 120px;
  }
  @media (max-width: 539px) {
    padding-bottom: 70px;
    padding-right: 32px;
    padding-left: 32px;
  }
`

const Car = styled(GatsbyImage)`
  position: absolute !important;
  bottom: 0;
  right: 0;
  width: clamp(20%, 30vw, 42%);
  max-width: 550px;

  @media (max-width: 1600px) {
    bottom: 10%;
  }
  @media (max-width: 1400px) {
    bottom: 15%;
  }
  @media (max-width: 876px) {
    width: 50%;
    bottom: 5%;
  }
  @media (max-width: 768px) {
    width: 55%;
    bottom: 10%;
  }
  @media (max-width: 639px) {
    display: none !important;
  }
`

const ItemsBox = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: clamp(32px, 3.33vw, 64px);
  grid-row-gap: clamp(32px, 3.33vw, 64px);

  svg {
    width: 40px;
    height: 40px;
  }

  span {
    display: grid;
    grid-template-columns: 40px 1fr;
    grid-column-gap: 8px;
    align-items: center;
  }

  h3 {
    margin: 0;
    font-size: 24px;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    font-weight: ${(props) =>
      props.isDarkTheme ? '500' : '600'};
  }

  h6 {
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    font-size: 18px;
    line-height: 26px;
    padding: 16px 0;
    margin: 0;
    font-weight: ${(props) =>
      props.isDarkTheme ? '600' : '600'};
  }

  p {
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.sub
        : props.theme.white.text.sub};
    font-size: 14px;
    line-height: 20px;
    padding: 0;
    margin: 0;
    font-weight: ${(props) =>
      props.isDarkTheme ? '400' : '500'};
  }

  @media (max-width: 876px) {
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 48px;
  }

  @media (max-width: 539px) {
    grid-template-columns: 1fr;
  }
`

const LinkS = styled(Link)`
  display: block;
  width: 246px;
  margin-top: 75px;
  text-align: center;
  padding: 16px 0;
  border-radius: 8px;
  text-decoration: none;
  text-transform: uppercase;
  transition: color 0.2s linear,
    background-color 0.2s linear;
  font-weight: bold;
  background-color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.button.static.background
      : props.theme.white.button.static.background};
  border: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.button.static.border
      : props.theme.white.button.static.border};
  color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.button.static.text
      : props.theme.white.button.static.text};
  box-shadow: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.button.static.shadow
      : props.theme.white.button.static.shadow};
  font-weight: 700;

  &:hover {
    background-color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.button.hover.background
        : props.theme.white.button.hover.background};
  }

  &:focus-visible {
    outline-offset: 4px;
  }

  @media (max-width: 539px) {
    margin-top: 35px;
    font-size: 12px;
    width: 186px;
  }
`
