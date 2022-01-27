import React, { useState } from "react"
import styled from "styled-components"
import Slide from './../images/slide.png'

const Slider = ({ data, isDarkTheme }) => {

    const [imgWidth, changeImgWidth] = useState('50%')
    const [imgWidthDelta, changeImgWidthDelta] = useState('200%')


    function handleChange(e) {
        let deltaVal = 200 / e.currentTarget.value
        let val = e.currentTarget.value / 2

        changeImgWidth(val + "%")
        changeImgWidthDelta(deltaVal * 100 + '%')
    }


    return (
        <Wrapper left={imgWidth}>
            <Broken bg={isDarkTheme ? data.repairedImage.url : data.repairedImageWhite.url} />
            <RepairedWrapper imgWidth={imgWidth}>
                <Repaired imgWidthDelta={imgWidthDelta} bg={isDarkTheme ? data.brokenImage.url : data.brokeImageWhite.url} />
            </RepairedWrapper>
            <input onChange={(e) => { handleChange(e) }} defaultValue='100' type="range" min="0" max="200" class="slider" />
        </Wrapper>
    )
}

export default Slider

const Wrapper = styled.div`
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

    }

    @media (max-width: 539px){
        
        .slider{
            height: calc(100vh - 280px);

            &::after{
                zoom: .6;
            }
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