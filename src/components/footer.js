import React from 'react'
import styled from 'styled-components'
import { StructuredText } from 'react-datocms'
import { Phone, Mail, Mark } from './../constants/icons'
import toast from 'react-hot-toast'
import Form from './footer-form'

const Footer = ({ data, isDarkTheme }) => {
  function Copy(e, index) {
    e.preventDefault()
    const valueCopied = data.links[index]?.text
    toast(`Skopiowano: ${valueCopied}`)
    navigator.clipboard.writeText(
      valueCopied ?? '698 664 926'
    )
  }

  return (
    <Wrapper isDarkTheme={isDarkTheme} id='kontakt'>
      <Flex>
        <TextBox isDarkTheme={isDarkTheme}>
          <StructuredText data={data.title} />
          <StructuredText data={data.textContent} />
          <Links isDarkTheme={isDarkTheme}>
            {data.links.map((el, index) => (
              <a
                aria-label='copy'
                href={el.text}
                onClick={(e) => {
                  Copy(e, index)
                }}>
                {(() => {
                  switch (index) {
                    case 0:
                      return <Phone />
                    case 1:
                      return <Mail />
                    case 2:
                      return <Mark />
                    default:
                      return null
                  }
                })()}
                <span>
                  {el.text}
                  {index === 0 ? (
                    <button className='copy'>
                      skopiuj
                    </button>
                  ) : null}
                </span>
              </a>
            ))}
          </Links>
          <OpenTimeTitle>
            {data.openTimeTitle}
          </OpenTimeTitle>
          <OpenTime isDarkTheme={isDarkTheme}>
            {data.openTimes.map((el) => (
              <div>
                <StructuredText data={el.content} />
              </div>
            ))}
          </OpenTime>
        </TextBox>
        <FormBox className='desctop'>
          <StructuredText data={data.formTitle} />
          <Form isDarkTheme={isDarkTheme} />
        </FormBox>
      </Flex>
      <Map
        aria-label='map link'
        isDarkTheme={isDarkTheme}
        href='https://www.google.com/maps/place/Rososz+145,+08-500+Rososz/data=!4m2!3m1!1s0x4718a1cc984f288b:0xa0ba4d0e46b74ea4?sa=X&ved=2ahUKEwjhpa3s5uH1AhWvAxAIHdbPDK0Q8gF6BAgWEAE'
        bg={isDarkTheme ? data.map.url : data.mapWhite.url}
      />
      <FormBox className='mobile'>
        <StructuredText data={data.formTitle} />
        <Form isDarkTheme={isDarkTheme} />
      </FormBox>
    </Wrapper>
  )
}

export default Footer

const Wrapper = styled.footer`
  margin-left: clamp(55px, 8.6vw, 167px);
  margin-top: clamp(55px, 9.31vw, 180px);
  margin-bottom: clamp(55px, 9.31vw, 180px);

  padding-top: clamp(32px, 3.33vw, 64px);
  padding-left: clamp(25px, 2.6vw, 50px);
  padding-right: clamp(140px, 14.5vw, 280px);
  padding-bottom: clamp(32px, 3.33vw, 64px);

  box-sizing: border-box;
  border-radius: 12px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
  background-color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.textBG
      : props.theme.white.textBG};
  box-shadow: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.textBGShadow
      : props.theme.white.textBGShadow};

  h2 {
    margin: 0;
    font-size: 40px;
    line-height: 50px;
  }

  h3 {
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    font-size: 24px;
    line-height: 28px;
    margin-top: 0;
    margin-bottom: 38px;
  }

  iframe {
    width: 100%;
    height: 380px;
    margin-top: 32px;
    border-radius: 8px;
  }

  @media (max-width: 876px) {
    margin-top: 160px;
    margin-left: 40px;
    margin-bottom: 55px;

    padding-right: 60px;
    padding-left: 60px;
    padding-bottom: 50px;
    padding-top: 55px;
  }

  @media (max-width: 539px) {
    background-color: unset;
    padding: 0;
    box-shadow: unset;

    margin: 60px 32px 80px;

    h3 {
      margin-bottom: 28px;
    }
  }
`

const Map = styled.a`
  display: block;
  width: 100%;
  aspect-ratio: 3/1;
  background-image: url(${(props) => props.bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 8px;
  margin-top: 32px;
  box-shadow: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.button.static.shadow
      : '0px 3px 6px -4px #979DA6'};

  @media (max-width: 876px) {
    margin-top: 54px;
    height: 385px;
    aspect-ratio: unset;
  }

  @media (max-width: 539px) {
    margin-top: 44px;
  }
`

const Flex = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 876px) {
    display: block;
  }
`

const TextBox = styled.div`
  padding-right: 12%;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.lines
        : props.theme.white.lines};
  }

  h2 {
    margin-bottom: 46px;
  }

  h4 {
    font-size: 18px;
    line-height: 26px;
    margin: 0;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    font-weight: ${(props) =>
      props.isDarkTheme ? '600' : '700'};
  }

  p {
    font-size: 14px;
    line-height: 20px;
    margin-top: 8px;
    margin-bottom: 24px;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.sub
        : props.theme.white.text.sub};
    font-weight: ${(props) =>
      props.isDarkTheme ? '400' : '500'};
  }

  @media (max-width: 876px) {
    max-width: 387px;
    padding-right: 0;

    &::after {
      display: none;
    }
  }
`

const FormBox = styled.div`
  padding-left: 12%;

  h3 {
    font-weight: ${(props) =>
      props.isDarkTheme ? '500' : '600'};
  }

  &.mobile {
    display: none;
  }

  @media (max-width: 876px) {
    padding-left: 0;
    max-width: 530px;

    &.desctop {
      display: none;
    }

    &.mobile {
      display: block;
    }

    h3 {
      margin-bottom: 38px;
      margin-top: 54px;
      font-weight: 500;
    }
  }

  @media (max-width: 539px) {
    h3 {
      margin: 40px 0 28px;
    }
  }
`

const Links = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-row-gap: 20px;
  margin-top: 38px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;

    svg {
      transition: all 0.2s linear;
      filter: grayscale(100%);
      width: 22px;
    }

    span {
      margin-left: 8px;
      color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.main
          : props.theme.white.text.main};
      transition: 0.2s linear;
      font-size: 14px;
      line-height: 20px;
      font-weight: ${(props) =>
        props.isDarkTheme ? '400' : '500'};
    }

    &:hover {
      svg {
        filter: unset;
      }
    }
  }

  .copy {
    text-align: center;
    padding: 3px 10px;
    border-radius: 4px;
    text-decoration: none;
    text-transform: uppercase;
    transition: 0.2s linear;
    font-weight: bold;
    font-weight: 700;
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
    cursor: pointer;
    margin-left: 10px;

    &:hover {
      background-color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.button.hover.background
          : props.theme.white.button.hover.background};
    }

    @media (min-width: 539px) {
      display: none;
    }
  }
`

const OpenTimeTitle = styled.h4`
  margin: 24px 0 8px !important;
  font-weight: ${(props) =>
    props.isDarkTheme ? '600' : '700'};
`

const OpenTime = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: clamp(16px, 2vw, 64px);

  h6 {
    margin: 0;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.sub
        : props.theme.white.text.sub};
    font-size: 14px;
    line-height: 20px;
    font-weight: ${(props) =>
      props.isDarkTheme ? '400' : '500'};
  }

  p {
    margin: 0;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    font-size: 14px;
    line-height: 20px;
    font-weight: 500;
    font-weight: ${(props) =>
      props.isDarkTheme ? '500' : '600'};
  }

  @media (max-width: 539px) {
    grid-template-columns: 1fr;
    grid-row-gap: 8px;
  }
`
