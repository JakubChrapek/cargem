import React, { useState } from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';
import { Link } from "react-scroll"
import Slider from "./header-slider";


const Header = ({ data, isDarkTheme }) => {

    return (
        <Wrapper isDarkTheme={isDarkTheme} id="header">
            <Slider data={data} isDarkTheme={isDarkTheme} />
            <Placeholder />
            <TextBox isDarkTheme={isDarkTheme}>
                <StructuredText data={data.title} />
                <ButtonsWrapper isDarkTheme={isDarkTheme}>
                    <Link href='#' tabindex="0" className="first" smooth={'easeOutCubic'} duration={'250'} to="oferta">{data.firstButtonText}</Link>
                    <Link href='#' tabindex="0" className="second" smooth={'easeOutCubic'} duration={'250'} to="kontakt">{data.secondButtonText}</Link>
                </ButtonsWrapper>
            </TextBox>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;

    &::after{
        display: ${props => props.isDarkTheme ? 'auto' : 'none'};
        content: "";
        position: absolute;
        z-index: 100;
        left: 0;
        right: 0;
        bottom: 0;
        height: 500px;
        background: linear-gradient(360deg, #030405 0%, #030405 11.72%, rgba(3, 4, 5, 0) 20.1%);
        pointer-events: none;
    }

    &::before{
        display: ${props => props.isDarkTheme ? 'auto' : 'none'};
        content: "";
        position: absolute;
        z-index: 1000;
        left: 0;
        right: 0;
        top: 0;
        height: 500px;
        background: linear-gradient(180deg, #030405 0%, #030405 11.72%, rgba(3, 4, 5, 0) 20.1%);
        pointer-events: none;
    }

    

    @media (max-width: 876px) {

        &::after{
            height: 250px;
        }

        &::before{
            height: 250px;
        }

        height: auto;

        .slider{
            height: calc(100vh - 280px);
        }

        &::after{
            bottom: 210px;
        }

        
    }
    @media (max-width: 639px){

        .slider{
            height: calc(100vh - 360px);
        }

        &::after{
            bottom: 325px;
        }
    }
    @media (max-width: 539px){
        
        .slider{
            height: calc(100vh - 280px);

            &::after{
                zoom: .6;
            }
        }

        &::after{
            bottom: 230px;
        }
    }

    @media (max-width: 436px){
        
        &::after{
            bottom: 260px;
        }
    }

`


const TextBox = styled.div`
    max-width: 700px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column;
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10000;
    margin: 0 auto;

    h1{
        font-size: 48px;
        line-height: 60px;
        margin: 0;
        color: ${props => props.isDarkTheme ? props.theme.black.text.main : props.theme.black.text.main};
        transition: .2s linear;
        text-align: center;
        letter-spacing: -1px;
        font-weight: 400;
    }

    @media (max-width: 876px) {
        position: relative;
        transform: unset;
        left: 0;
        margin-top: 32px;

        h1{
            font-size: 40px;
            line-height: 50px;
            color: ${props => props.isDarkTheme ? props.theme.black.text.main : props.theme.white.text.main};
        }
    }

    @media (max-width: 639px){
        h1{   
            padding: 0 40px;
        }
    }

    
    @media (max-width: 539px) {
        h1{   
            font-size: 24px;
            line-height: 30px;
        }

    }

`

const Placeholder = styled.div`
    display: none;

    @media (max-width: 876px) {
        display: block;
        width: 100%;
        height: calc(100vh - 280px);
    }
    @media (max-width: 639px){
        height: calc(100vh - 360px);
    }
    @media (max-width: 539px){
        height: calc(100vh - 280px);
    }
    
`

const ButtonsWrapper = styled.div`
    position: relative;
    z-index: 9;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 32px;
    max-width: 524px;
    width: 100%;
    margin: 30px auto 100px;

    a{
        text-align: center;
        padding: 16px 64px;
        border-radius: 8px;
        text-decoration: none;
        text-transform: uppercase;
        transition: .2s linear;
        font-weight: bold;
        font-weight: 700;

        &.first{
            background-color: ${props => props.isDarkTheme ? props.theme.black.button.static.background : props.theme.white.button.static.background};
            border: ${props => props.isDarkTheme ? props.theme.black.button.static.border : props.theme.white.button.static.border};
            color: ${props => props.isDarkTheme ? props.theme.black.button.static.text : props.theme.white.button.static.text};
            box-shadow: ${props => props.isDarkTheme ? props.theme.black.button.static.shadow : 'none'};

            &:hover{
                background-color: ${props => props.isDarkTheme ? props.theme.black.button.hover.background : props.theme.white.button.hover.background};
            }
        }

        &.second{
            background-color: ${props => props.theme.black.text.main};
            border: ${props => props.theme.black.text.main};
            color: ${props => props.theme.white.text.main};
            box-shadow: 5px 10px 10px -4px rgba(0, 0, 0, 0.8), inset -2px -2px 6px -4px rgba(0, 0, 0, 0.15); 

            &:hover{
                filter: brightness(0.8);
            }
        }
    }

    @media (max-width: 876px) {
        margin-bottom: 0;
    }

    @media (max-width: 639px) {
        grid-template-columns: 1fr;
        grid-row-gap: 16px;

        a{
            width: max-content;
            margin: 0 auto;
        }
    }
    @media (max-width: 539px){
        a{
            font-size: 12px;
        }
    }

`