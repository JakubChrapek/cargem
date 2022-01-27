
import React, { useContext, useEffect } from "react"
import styled from "styled-components"
import { ThemeChangeContext } from "../HOCs/isBlackTheme"
import { Home, Car, Price, Faq, Phone, Facebook, Twiter, Linkedin, Instagram } from "../constants/icons"

const Aside = ({ data, isDarkTheme, setMenuState }) => {

    let changeColorMode = useContext(ThemeChangeContext)

    // if (typeof document !== `undefined`){
    //     var options = {
    //         root: document.querySelector('#main'),
    //         rootMargin: '0px',
    //         threshold: 1.0
    //     }

    //     var callback = function(entries, observer) {
    //         let allNavItems = document.querySelectorAll('.navItem')
    //         let currItem = document.querySelector(`#${entries[0].target.id}Nav`)

    //         for(let i = 0; i < allNavItems.length; i++){
    //             allNavItems[i].classList.remove('active')
    //         }

    //         currItem.classList.add('active')
    //         console.log(entries)
    //     }

    //     var observer = new IntersectionObserver(callback, options)


    //     useEffect(() => {
    //         observer.observe(document.querySelector("#main"))
    //         observer.observe(document.querySelector("#oNas"))
    //         observer.observe(document.querySelector("#oferta"))
    //         observer.observe(document.querySelector("#faq"))
    //         observer.observe(document.querySelector("#kontakt"))
    //     }, [])
    // }

    return (
        <Wrapper className="" id="aside">

            <div>
                <CloseNav onClick={setMenuState} />
                <a href="#main"><Logo src={isDarkTheme ? data.logo.url : data.logoWhite.url} alt={isDarkTheme ? data.logo.alt : data.logoWhite.alt} /></a>
                <Nav>
                    <List>
                        <ListItem className="navItem" id="mainNav">
                            <a href="#main">
                                <Home />
                                Strona Główna
                            </a>
                        </ListItem>
                        <ListItem className="navItem" id="oNasNav">
                            <a href="#oNas">
                                <Car />
                                O Nas
                            </a>
                        </ListItem>
                        <ListItem className="navItem" id="ofertaNav">
                            <a href="#oferta">
                                <Price />
                                Oferta
                            </a>
                        </ListItem>
                        <ListItem className="navItem" id="faqNav">
                            <a href="#faq">
                                <Faq />
                                FAQ
                            </a>
                        </ListItem>
                        <ListItem className="navItem" id="kontaktNav">
                            <a href="#kontakt">
                                <Phone />
                                Kontakt
                            </a>
                        </ListItem>
                    </List>
                </Nav>
            </div>
            <div>
                <SocialMedia>
                    {data.socialMedia.map((el, index) => (
                        <li>
                            <a href={el.link} target="_blank" rel="noreferrer">
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
                                    }
                                })()}
                            </a>
                        </li>
                    ))}
                </SocialMedia>
                <ColorTrybe>
                    {data.nightModeTitle}
                    <div tabindex="0" autoFocus='true' onClick={changeColorMode}>
                        <span />
                    </div>
                </ColorTrybe>
                <Copyright>
                    {data.copyright}
                </Copyright>
            </div>
        </Wrapper>
    )
}

export default Aside

const Wrapper = styled.aside`
    transition: .2s linear;
    padding: clamp(32px, 3.33vw, 64px) clamp(32px, 1.04vw, 64px) clamp(32px, 1.3vw, 64px) clamp(32px, 3.1vw, 64px);
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    background: ${props => props.theme.isBlackTheme ? props.theme.black.aside.background : props.theme.white.aside.background};
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
        z-index: 100;
        padding: 65px 32px 44px 40px;
        transform: translateX(-100%);
        transition: .2s linear;

        &.active{
            transform: translateX(0);
        }
    }

    div{
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

    svg{
        margin-right: 10px;

        transition: all .2s linear;

        path{
            transition: .2s linear;
            fill: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
        }
    }

    a{
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        font-size: 18px;
        line-height: 26px;

        transition: all .2s linear;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.aside.default : props.theme.white.aside.default};
    }

    &.active{
        svg{
            path{
                fill:  ${props => props.theme.isBlackTheme ? props.theme.black.text.active : props.theme.white.text.active};
            }
        }

        a{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.aside.active : props.theme.white.aside.active};
        }
    }

    &:hover{
        svg{
            path{
                fill:  ${props => props.theme.isBlackTheme ? props.theme.black.text.hover : props.theme.white.text.hover};
            }
        }

        a{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.aside.active : props.theme.white.aside.active};
        }
    }

`
const SocialMedia = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin-bottom: 64px;

    li{
        margin-right: 24px;
    }

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        svg{
            transition: all .2s linear;
            path{
                transition: .2s linear;
                fill:  ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            }
        }

        &:hover{
            svg{
                path{
                    fill:  ${props => props.theme.isBlackTheme ? props.theme.black.text.hover : props.theme.white.text.hover};
                }
            }
        }
    }

`

const ColorTrybe = styled.div`
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};  
    display: flex;
    align-items: center;

    div{
        margin-left: 6px;
        width: 40px;
        height: 20px;
        box-sizing: border-box;
        padding: 2px;
        position: relative;
        border-radius: 50px;
        background-color:  ${props => props.theme.isBlackTheme ? props.theme.black.text.active : props.theme.white.text.sub};
        transition: .2s linear;
        cursor: pointer;
    }

    span{
        display: block;
        border-radius: 50px;
        width: 16px;
        height: 16px;
        position: absolute;
        left: ${props => props.theme.isBlackTheme ? "22px" : "2px"};
        background-color: ${props => props.theme.black.text.main};
        transition: .2s linear;

        
    }

`

const Copyright = styled.p`
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
    margin: 28px 0 0 0;
    font-size: 14px;
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

    &::after{
        width: 20px;
        height: 2px;
        content: "";
        transform: rotateZ(45deg);
        background-color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
        position: absolute;
        right: 0;
        left: 0;
        top: 45%;
    }

    &::before{
        width: 20px;
        height: 2px;
        content: "";
        transform: rotateZ(-45deg);
        background-color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
        position: absolute;
        right: 0;
        left: 0;
        top: 45%;
    }
`