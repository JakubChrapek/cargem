import React from "react";
import styled from "styled-components";

const Header = ({ data }) => {

    function handleChange(e){
        debugger
        // img width = e.currentTarget.value
    }

    return (
        <Wrapper>
            <Broken bg={data.brokenImage.url} />
            <RepairedWrapper>
                <Repaired bg={data.repairedImage.url} />
            </RepairedWrapper>
            <input onChange={(e) => {handleChange(e)}} type="range" min="1" max="100" class="slider" name='slider' id="slider"></input>
        </Wrapper>
    )
}

export default Header

const Wrapper = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;



    .slider {
        position: absolute;
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
        background: #fff; //change
        cursor: pointer;
    }
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
    position: relative;
    height: 100%;
    width: 50%; // value
`

const Repaired = styled.div`
    position: absolute;
    z-index: 1;
    height: 100%;
    width: 000%; // value
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`

const Line = styled.span`
    position: absolute;
    top: 0; 
    left: 10%; // value
    width: 2px;
    height: 100%;
    background-color: #fff; //change

    &::after{

    }
`