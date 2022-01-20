import React, { useState } from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';
import Slide from './../images/slide.png'

const Header = ({ data }) => {
    const [imgWidth, changeImgWidth] = useState('50%')
    const [imgWidthDelta, changeImgWidthDelta] = useState('200%')

    function handleChange(e) {
        let deltaVal = 1000 / e.currentTarget.value
        let val = e.currentTarget.value / 10

        changeImgWidth(val + "%")
        changeImgWidthDelta(deltaVal * 100 + '%')
    }

    return (
        <Wrapper>
            <Broken bg={data.brokenImage.url} />
            <RepairedWrapper imgWidth={imgWidth}>
                <Repaired imgWidthDelta={imgWidthDelta} bg={data.repairedImage.url} />
            </RepairedWrapper>
            <Slider left={imgWidth} onChange={(e) => { handleChange(e) }} defaultValue='500' type="range" min="0" max="1000" class="slider" name='slider' id="slider"/>
            <TextBox>
                <StructuredText data={data.title}/>
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

`

const Slider = styled.input`
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
    height: 100%;
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
        width: 2px;
        height: 100vh;
        background: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub}; //change
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
`

const Broken = styled.div`
    position: absolute;
    z-index: 0;
    height: 100%;
    width: 100%;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const RepairedWrapper = styled.div`
    overflow: hidden;
    position: absolute;
    height: 100%;
    width: ${props => props.imgWidth};
`

const Repaired = styled.div`
    position: absolute;
    z-index: 1;
    height: 100%;
    width: ${props => props.imgWidthDelta};
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const TextBox = styled.div`
    max-width: 680px;
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

    p{
        font-size: 48px;
        line-height: 60px;
        margin: 0;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
        transition: .2s linear;
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

        &.first{
            background-color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.background : props.theme.white.button.static.background};
            border: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.border : props.theme.white.button.static.border};
            color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.text : props.theme.white.button.static.text};

            &:hover{

            }
        }

        &.second{
            background-color: ${props => props.theme.black.text.main};
            border: ${props => props.theme.black.text.main};
            color: ${props => props.theme.white.text.main};

            &:hover{
                
            }
        }
    }
`