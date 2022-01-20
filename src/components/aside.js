
import React from "react"
import styled from "styled-components"
import { changeTheme } from "../constants/theme"

const Aside = ({ data }) => {
    return (
        <Wrapper>
            <div>
                <Logo src={data.logo.url} alt={data.logo.alt} />
                <Nav>
                    <List>
                        {data.navigation.map((el) => (
                            <ListItem>
                                <a href="#">
                                    <img src={el.linkIcon.url} alt={el.linkIcon.alt} />
                                    {el.linkTitle}
                                </a>
                            </ListItem>
                        ))}
                    </List>
                </Nav>
            </div>
            <div>
                <SocialMedia>
                    {data.socialMedia.map((el) => (
                        <li>
                            <a href={el.link}>
                                <img src={el.icon.url} alt={el.icon.alt} />
                            </a>
                        </li>
                    ))}
                </SocialMedia>
                <ColorTrybe>
                    {data.nightModeTitle}
                    <div onClick={changeTheme}>
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
    padding: 65px 20px 25px 60px;
    box-sizing: border-box;
    display: fixed;
    height: 100vh;
    width: 100%;
    background: ${props => props.theme.isBlackTheme ? props.theme.black.aside.background : props.theme.white.aside.background};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Logo = styled.img`
    max-width: 176px;
`

const Nav = styled.nav`
    padding-top: 180px;
`

const List = styled.ul`
    list-style: none;
    padding: 0;
`

const ListItem = styled.li`
    margin-bottom: clamp(10px, 5vh, 40px);

    img{
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
        img{
            filter: unset;
        }

        a{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.aside.active : props.theme.white.aside.active};
        }
    }

    &.active{
        img{
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

        img{
            margin-right: 24px;

            transition: all .2s linear;
            filter: grayscale(100%);
        }

        &:hover{
            img{
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
        background-color:  ${props => props.theme.white.text.sub};
        transition: .2s linear;
    }

    span{
        display: block;
        border-radius: 50px;
        width: 16px;
        height: 16px;
        position: absolute;
        left: 2px;
        background-color: ${props => props.theme.black.text.main};
        transition: .2s linear;

        
    }

    &.active{
        div{
            background-color: ${props => props.theme.black.text.active};
        }

        span{
            left: 22px;
        }
    }

`

const Copyright = styled.p`
    color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
`