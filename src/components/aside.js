import React, { useContext } from 'react'
import styled from 'styled-components'
import { ThemeChangeContext } from '../HOCs/isBlackTheme'
import {
  Home,
  Car,
  Price,
  Faq,
  Phone,
  Facebook,
  Twiter,
  Linkedin,
  Instagram
} from '../constants/icons'
import { Link } from 'react-scroll'

const Aside = ({ data, isDarkTheme, setMenuState }) => {
  const changeColorMode = useContext(ThemeChangeContext)
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.keyCode === 32) {
      changeColorMode()
    }
  }
  return (
    <Wrapper
      className=''
      id='aside'
      isDarkTheme={isDarkTheme}>
      <div>
        <CloseNav
          isDarkTheme={isDarkTheme}
          onClick={setMenuState}
        />
        <Link
          smooth={'easeOutCubic'}
          duration={'250'}
          onClick={setMenuState}
          to='header'>
          <Logo
            src={
              isDarkTheme
                ? data.logo.url
                : data.logoWhite.url
            }
            alt={
              isDarkTheme
                ? data.logo.alt
                : data.logoWhite.alt
            }
          />
        </Link>
        <Nav>
          <List>
            <ListItem
              isDarkTheme={isDarkTheme}
              className='navItem'
              id='mainNav'>
              <Link
                href='#'
                tabindex='0'
                activeClass='active'
                spy={true}
                smooth={'easeOutCubic'}
                duration={'250'}
                onClick={setMenuState}
                to='header'>
                <Home />
                Strona Główna
              </Link>
            </ListItem>
            <ListItem
              isDarkTheme={isDarkTheme}
              className='navItem'
              id='oNasNav'>
              <Link
                href='#'
                tabindex='0'
                activeClass='active'
                spy={true}
                smooth={'easeOutCubic'}
                duration={'250'}
                onClick={setMenuState}
                to='oNas'>
                <Car />O Nas
              </Link>
            </ListItem>
            <ListItem
              isDarkTheme={isDarkTheme}
              className='navItem'
              id='ofertaNav'>
              <Link
                href='#'
                tabindex='0'
                activeClass='active'
                spy={true}
                smooth={'easeOutCubic'}
                duration={'250'}
                onClick={setMenuState}
                to='oferta'>
                <Price />
                Oferta
              </Link>
            </ListItem>
            <ListItem
              isDarkTheme={isDarkTheme}
              className='navItem'
              id='faqNav'>
              <Link
                href='#'
                tabindex='0'
                activeClass='active'
                spy={true}
                smooth={'easeOutCubic'}
                duration={'250'}
                onClick={setMenuState}
                to='faq'>
                <Faq />
                FAQ
              </Link>
            </ListItem>
            <ListItem
              isDarkTheme={isDarkTheme}
              className='navItem'
              id='kontaktNav'>
              <Link
                href='#'
                tabindex='0'
                activeClass='active'
                spy={true}
                smooth={'easeInCubic'}
                duration={'250'}
                onClick={setMenuState}
                to='kontakt'>
                <Phone />
                Kontakt
              </Link>
            </ListItem>
          </List>
        </Nav>
      </div>
      <div>
        <SocialMedia isDarkTheme={isDarkTheme}>
          {data.socialMedia.map((el, index) => (
            <li key={`social-${el.link}`}>
              <a
                href={el.link}
                target='_blank'
                rel='noreferrer'>
                {(() => {
                  switch (index) {
                    case 0:
                      return <Instagram />
                    case 1:
                      return <Facebook />
                    case 2:
                      return <Twiter />
                    case 3:
                      return <Linkedin />
                    default:
                      return null
                  }
                })()}
              </a>
            </li>
          ))}
        </SocialMedia>
        <ColorTrybe isDarkTheme={isDarkTheme}>
          {data.nightModeTitle}
          <div
            tabindex='0'
            onClick={changeColorMode}
            onKeyDown={handleKeyDown}
            role='switch'
            aria-checked={isDarkTheme}>
            <span />
          </div>
        </ColorTrybe>
        <Copyright isDarkTheme={isDarkTheme}>
          {data.copyright}
        </Copyright>
      </div>
    </Wrapper>
  )
}

export default Aside

const Wrapper = styled.aside`
  transition: transform 0.2s linear, background 0.2s linear;
  padding: clamp(32px, 3.33vw, 64px)
    clamp(32px, 1.04vw, 64px) clamp(32px, 1.3vw, 64px)
    clamp(32px, 3.1vw, 64px);
  box-sizing: border-box;
  height: 100vh;
  width: 100%;
  background: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.aside.background
      : props.theme.white.aside.background};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;

  @media (max-width: 1240px) {
    width: 315px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1000000;
    padding: 65px 32px 44px 40px;
    transform: translateX(-100%);

    &.active {
      transform: translateX(0);
    }
  }

  div {
    position: relative;
  }
`

const Logo = styled.img`
  max-width: 176px;
`

const Nav = styled.nav`
  padding-top: clamp(30px, 9.3vw, 180px);
`

const List = styled.ul`
  list-style: none;
  padding: 0;
`

const ListItem = styled.li`
  margin-bottom: clamp(10px, 5vh, 40px);

  svg {
    margin-right: 10px;

    transition: all 0.2s linear;

    path {
      transition: 0.2s linear;
      fill: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.sub
          : props.theme.white.text.grey};
    }
  }

  &:hover {
    svg {
      path {
        fill: ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.hover
            : props.theme.white.text.sub};
      }
    }

    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.aside.active
        : props.theme.white.text.hover};
  }

  a {
    text-decoration: none;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    font-size: 18px;
    line-height: 26px;
    font-weight: ${(props) =>
      props.isDarkTheme ? '400' : '500'};

    transition: color 0.2s linear;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.aside.default
        : props.theme.white.aside.default};
    &:focus-visible {
      outline-offset: 6px;
    }
    &.active {
      svg {
        path {
          fill: ${(props) =>
            props.isDarkTheme
              ? props.theme.black.text.active
              : props.theme.white.text.active};
        }
      }

      color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.aside.active
          : props.theme.white.aside.active};
      font-weight: ${(props) =>
        props.isDarkTheme ? '500' : '600'};
    }
  }
`
const SocialMedia = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin-bottom: 64px;

  li {
    margin-right: 24px;
  }

  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    &:focus-visible {
      outline-offset: 6px;
    }
    svg {
      transition: all 0.2s linear;
      path {
        transition: 0.2s linear;
        fill: ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.sub
            : props.theme.white.text.sub};
      }
    }

    &:hover {
      svg {
        path {
          fill: ${(props) =>
            props.isDarkTheme
              ? props.theme.black.text.hover
              : props.theme.white.text.hover};
        }
      }
    }
  }
`

const ColorTrybe = styled.div`
  color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.text.sub
      : props.theme.white.text.sub};
  display: flex;
  align-items: center;

  div {
    margin-left: 6px;
    width: 48px;
    height: 24px;
    box-sizing: border-box;
    padding: 2px;
    position: relative;
    border-radius: 50px;
    background-color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.active
        : props.theme.white.text.sub};
    transition: background 0.2s linear;
    cursor: pointer;
    &:focus-visible {
      outline-offset: 2px;
    }
  }

  span {
    display: block;
    border-radius: 50px;
    width: 20px;
    height: 20px;
    position: absolute;
    left: ${(props) =>
      props.isDarkTheme ? '26px' : '2px'};
    background-color: ${(props) =>
      props.theme.black.text.main};
    transition: left 0.2s linear, background 0.2s linear;
    font-weight: ${(props) =>
      props.isDarkTheme ? '400' : '500'};
  }
`

const Copyright = styled.p`
  color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.text.sub
      : props.theme.white.text.sub};
  margin: 28px 0 0 0;
  font-size: 14px;
  font-weight: ${(props) =>
    props.isDarkTheme ? '500' : '600'};
`

const CloseNav = styled.div`
  @media (min-width: 1240px) {
    display: none;
  }

  position: absolute !important;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  cursor: pointer;

  &::after {
    width: 20px;
    height: 2px;
    content: '';
    transform: rotateZ(45deg);
    background-color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    position: absolute;
    right: 0;
    left: 0;
    top: 45%;
  }

  &::before {
    width: 20px;
    height: 2px;
    content: '';
    transform: rotateZ(-45deg);
    background-color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.main
        : props.theme.white.text.main};
    position: absolute;
    right: 0;
    left: 0;
    top: 45%;
  }
`
