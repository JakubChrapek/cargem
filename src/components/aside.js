
import React, { useContext } from "react"
import styled from "styled-components"
import { ThemeChangeContext } from "../HOCs/isBlackTheme"
import { Home, Car, Price, FAQ, Phone, Facebook, Twiter, Linkedin, Instagram } from "../constants/icons"

const Aside = ({ data, isDarkTheme }) => {

    let changeColorMode = useContext(ThemeChangeContext)

    return (
        <Wrapper>
            <div>
                <Logo src={isDarkTheme ? data.logo.url : data.logoWhite.url} alt={isDarkTheme ? data.logo.alt : data.logoWhite.alt} />
                <Nav>
                    <List>
                        {data.navigation.map((el, index) => (
                            <ListItem>
                                <a href="#">
                                    {(() => {
                                        switch (index) {
                                            case 0:
                                                return <Home />
                                            case 1:
                                                return <Car />
                                            case 2:
                                                return <Price />
                                            case 3:
                                                return <FAQ />
                                            case 4:
                                                return <Phone />
                                        }
                                    })()}
                                    {el.linkTitle}
                                </a>
                            </ListItem>
                        ))}
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
                    <div onClick={changeColorMode}>
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
    padding: 65px 20px 25px 60px;
    box-sizing: border-box;
    height: 100vh;
    width: 100%;
    background: ${props => props.theme.isBlackTheme ? props.theme.black.aside.background : props.theme.white.aside.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: sticky;
    top: 0;
`

const Logo = styled.img`
    max-width: 176px;
`

const Nav = styled.nav`
    padding-top: clamp(30px, 15vh, 180px);
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
        filter: grayscale(100%);
    }

    a{
        text-decoration: none;
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;

        transition: all .2s linear;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.aside.default : props.theme.white.aside.default};
    }

    &:hover{
        svg{
            filter: unset;
        }

        a{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.aside.active : props.theme.white.aside.active};
        }
    }

    &.active{
        svg{
            filter: unset;
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

    a{
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        svg{
            margin-right: 24px;

            transition: all .2s linear;
            filter: grayscale(100%);
        }

        &:hover{
            svg{
                filter: unset;
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
`