import React, { useState } from "react"
import { StructuredText } from "react-datocms";
import styled from "styled-components";

const PriceContent = ({ isDarkTheme, index, items, choosenIndex }) => {

    const [itemCount] = useState(items.length)
    const [isMaxCount, setIsMaxCount] = useState(null)

    if (typeof window !== `undefined` && isMaxCount === null) {
        setIsMaxCount(window.innerWidth < 540)
    }

    return (
        <Grid isDarkTheme={isDarkTheme} id={'tabContent' + index} className={`${choosenIndex == index ? 'active' : null} tabContent`}>
            {items.map((el, index) => (
                <>
                    {isMaxCount
                        ? index < 10
                            ? <div>
                                <StructuredText data={el.content} />
                            </div>
                            : null
                        : <div>
                            <StructuredText data={el.content} />
                        </div>
                    }
                </>
            ))}
            <MoreButton isDarkTheme={isDarkTheme} items={itemCount} >
                <MoreButtonText isDarkTheme={isDarkTheme} isMax={items.length < 10} isShowMore={!isMaxCount}>
                    {isMaxCount
                        ? itemCount < 10
                            ? itemCount
                            : '10'
                        : itemCount} z {itemCount} usług
                </MoreButtonText>
                {itemCount < 11
                    ? null
                    : <MoreButtonButton isDarkTheme={isDarkTheme} onClick={() => { setIsMaxCount(!isMaxCount) }}> {isMaxCount ? "Wczytaj więcej" : "Pokaż mniej"}</MoreButtonButton>}
            </MoreButton>
        </Grid>
    )
}

export default PriceContent

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    transition: .2s linear;
    opacity: 0;
    pointer-events: none;
    position: absolute;

    &.active{
        opacity: 1;
        pointer-events: all;
        position: relative;
    }


    div{
        padding-right: clamp(50px, 5.2vw, 100px);
        padding-top: 16px;
        padding-bottom: 20px;
        padding-left: 0;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: ${props => props.isDarkTheme ? props.theme.black.lines : props.theme.white.lines};
            transition: all .2s linear;
        }

        h6{
            color: ${props => props.isDarkTheme ? props.theme.black.text.main : props.theme.white.text.main};
            padding-bottom: 4px;
            margin: 0;
            font-size: 18px;
            line-height: 26px;
        }

        p{
            color: ${props => props.isDarkTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            margin: 0;
            font-size: 18px;
            line-height: 26px;
        }
    }

    @media (max-width: 876px) {
        grid-template-columns: 1fr 1fr;


        div{
            padding: 16px clamp(24px, 6.25vw, 48px) 12px 8px;

            
            :nth-child(2n){
                padding: 16px 8px 12px clamp(24px, 6.25vw, 48px);
                
            }
        }
    }

    @media(max-width: 539px){
        grid-template-columns: 1fr;

        div{
            padding: 16px 0 12px!important;
        }
    }

`

const MoreButton = styled.div`
    display: none;

    @media (max-width: 539px) {
        display: block;
        text-align: center;
    }
`

const MoreButtonButton = styled.button`
    margin: 0 auto;
    text-align: center;
    padding: 12px 24px;
    font-size: 12px;
    border-radius: 8px;
    text-decoration: none;
    text-transform: uppercase;
    transition: .2s linear;
    font-weight: bold;
    cursor: pointer;
    background-color: ${props => props.isDarkTheme ? props.theme.black.button.static.background : props.theme.white.button.static.background};
    border: ${props => props.isDarkTheme ? props.theme.black.button.static.border : props.theme.white.button.static.border};
    color: ${props => props.isDarkTheme ? props.theme.black.button.static.text : props.theme.white.button.static.text};
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;

    &:hover{
        background-color: ${props => props.isDarkTheme ? props.theme.black.button.hover.background : props.theme.white.button.hover.background};
    }
`

const MoreButtonText = styled.p`
    max-width: 190px;
    font-size: 14px !important;
    margin: 0 auto 16px !important;
    padding-bottom: 4px;
    position: relative;

    &::after{
        transition: .2s linear;
        width: ${props => props.isShowMore ? "100" : props.isMax ? '100' : 10 / props.items * 100}%;
        content: "";
        position: absolute;
        height: 1px;
        bottom: 0;
        left: 0;
        background: ${props => props.isDarkTheme ? props.theme.black.text.main : props.theme.white.text.main};
    }

    &::before{
        width: 100%;
        content: "";
        position: absolute;
        height: 1px;
        bottom: 0;
        left: 0;
        right: 0;
        background: ${props => props.isDarkTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
    }
`