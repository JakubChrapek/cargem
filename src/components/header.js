import React, { useState } from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';
import Slide from './../images/slide.png'


const Header = ({ data, isDarkTheme }) => {
    const [imgWidth, changeImgWidth] = useState('50%')
    const [imgWidthDelta, changeImgWidthDelta] = useState('200%')


    function handleChange(e) {
        let deltaVal = 1000 / e.currentTarget.value
        let val = e.currentTarget.value / 10

        changeImgWidth(val + "%")
        changeImgWidthDelta(deltaVal * 100 + '%')
    }

    return (
        <Wrapper id="main" left={imgWidth}>
            <Broken bg={isDarkTheme ? data.repairedImage.url : data.repairedImageWhite.url} />
            <RepairedWrapper imgWidth={imgWidth}>
                <Repaired imgWidthDelta={imgWidthDelta} bg={isDarkTheme ? data.brokenImage.url : data.brokeImageWhite.url} />
            </RepairedWrapper>
            <input onChange={(e) => { handleChange(e) }} defaultValue='500' type="range" min="0" max="1000" class="slider" />
            <Placeholder />
            <TextBox>
                <StructuredText data={data.title} />
                <ButtonsWrapper>
                    <a className="first" href="#">{data.firstButtonText}</a>
                    <a className="second" href="#">{data.secondButtonText}</a>
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

    .slider{
        overflow: hidden;
        position: absolute;
        z-index: 6;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        -webkit-appearance: none;
        appearance: none;
        width: 100%;
        height: 100vh;
        background: rgba(0, 0, 0, .0);
        outline: none;
        margin: 0;
        transition: all .2s;
        display: flex;
        justify-content: center;
        align-items: center;
        &::-webkit-slider-thumb {
            -webkit-appearance: none;
            appearance: none;
            width: 1px;
            height: 100vh;
            background: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            cursor: pointer;
        }
        &::after{
            content: url(${Slide});
            top: calc(50% - 26px);
            position: absolute;
            width: 52px;
            height: 52px;
            left: calc(${props => props.left} - 26px);
            cursor: pointer;
        }
    }

    @media (max-width: 876px) {
        height: auto;

        .slider{
            height: calc(100vh - 280px);
        }

        &::after{
            display: ${props => props.theme.isBlackTheme ? 'auto' : 'none'};
            content: "";
            position: absolute;
            z-index: 100;
            left: 0;
            right: 0;
            bottom: 210px;
            height: 100px;
            background: linear-gradient(360deg, #030405 0%, #030405 11.72%, rgba(3, 4, 5, 0) 20.1%);
        }

        &::before{
            display: ${props => props.theme.isBlackTheme ? 'auto' : 'none'};
            content: "";
            position: absolute;
            z-index: 1000;
            left: 0;
            right: 0;
            top: 0;
            height: 100px;
            background: linear-gradient(180deg, #030405 0%, #030405 11.72%, rgba(3, 4, 5, 0) 20.1%);
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

const Broken = styled.div`
    position: absolute;
    z-index: 0;
    height: 100vh;
    width: 100%;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;

    @media(max-width: 876px){
        height: calc(100vh - 280px);
    }
    @media (max-width: 639px){
        height: calc(100vh - 360px);
    }
    @media (max-width: 539px){
        height: calc(100vh - 280px);
    }
`

const RepairedWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    height: 100vh;
    width: ${props => props.imgWidth};
    @media(max-width: 876px){
        height: calc(100vh - 280px);
    }
    @media (max-width: 639px){
        height: calc(100vh - 360px);
    }
    @media (max-width: 539px){
        height: calc(100vh - 280px);
    }
`

const Repaired = styled.div`
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: ${props => props.imgWidthDelta};
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    @media(max-width: 876px){
        height: calc(100vh - 280px);
    }
    @media (max-width: 639px){
        height: calc(100vh - 360px);
    }
    @media (max-width: 539px){
        height: calc(100vh - 280px);
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
    z-index: 10;
    margin: 0 auto;

    h1{
        background-color: rgba(0, 0, 0, .2);
        font-size: 48px;
        line-height: 60px;
        margin: 0;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.black.text.main};
        transition: .2s linear;
        text-align: center;
    }

    @media (max-width: 876px) {
        position: relative;
        transform: unset;
        left: 0;
        margin-top: 32px;

        h1{
            font-size: 40px;
            line-height: 50px;
            ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main}
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

        &.first{
            background-color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.background : props.theme.white.button.static.background};
            border: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.border : props.theme.white.button.static.border};
            color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.text : props.theme.white.button.static.text};

            &:hover{
                background-color: ${props => props.theme.isBlackTheme ? props.theme.black.button.hover.background : props.theme.white.button.hover.background};
            }
        }

        &.second{
            background-color: ${props => props.theme.black.text.main};
            border: ${props => props.theme.black.text.main};
            color: ${props => props.theme.white.text.main};

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