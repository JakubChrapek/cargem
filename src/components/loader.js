import React, { useEffect } from 'react'
import styled from 'styled-components'
import { animateScroll as scroll } from 'react-scroll'
import { LogoBottom, LogoMiddle, LogoTop, LogoName, colors } from '../constants/icons'
import { theme } from './../constants/theme'

const Loader = ({ isDarkTheme }) => {
    useEffect(() => {
        scroll.scrollToTop()
        setTimeout(() => {
            document.getElementById('Loader').classList.add('active')
        }, 1)

        setTimeout(() => {
            document.getElementById('Loader').classList.add('off')
        }, 2000)

    }, [])


    return (
        <Wrapper isDarkTheme={isDarkTheme} id="Loader" theme={theme}>
            <div>
                <LogoTop />
                <LogoMiddle />
                <LogoBottom />
            </div>
            <LogoName color={theme.isBlackTheme ? colors.white : colors.black} />
        </Wrapper>
    )
}

export default Loader

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: ${props => props.isDarkTheme ? props.theme.black.aside.background : props.theme.white.aside.background};
    transition: .5s linear;
    z-index: 100000;
    display: flex;
    justify-content: center;
    align-items: center;

    div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    &.off{
        opacity: 0;
        pointer-events: none;
    }

    .top{
        transform: translateY(-2px) translateX(-50px);
        opacity: 0;
        zoom: 2;
        transition: all .4s ease-out;
    }

    .mid{
        transform: translateX(-50px);
        opacity: 0;
        zoom: 2;
        transition: all .4s ease-out .4s;
    }

    .bot{
        transform: translateY(20px);
        opacity: 0;
        zoom: 2;
        transition: all .4s ease-out .8s;
    }

    .title{
        transform: translateY(30px);
        opacity: 0;
        zoom: 2;
        transition: all .4s ease-out 1.2s;

    }

    &.active{
        .top{
            transform: translateY(-4px);
            zoom: 2;
            opacity: 1;
        }

        .mid{
            transform: translateY(-2px);
            zoom: 2;
            opacity: 1;
        }

        .bot{
            transform: translateY(-3.2px);
            zoom: 2;
            opacity: 1;
        }

        .title{
            transform: translateY(0px);
            zoom: 2;
            opacity: 1;
        }
    }

 
`