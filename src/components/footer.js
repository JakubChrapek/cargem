import React from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';
import { Phone, colors, Mail, Mark } from './../constants/icons'
import toast from 'react-hot-toast';
import Form from './footer-form'

const Footer = ({ data, isDarkTheme }) => {

    function Copy(e) {
        e.preventDefault()
        toast('copyied to clipboard')
        navigator.clipboard.writeText(e.target.innerText)
    }


    return (
        <Wrapper>
            <Flex>
                <TextBox>
                    <StructuredText data={data.title} />
                    <StructuredText data={data.textContent} />
                    <Links>
                        {data.links.map((el, index) => (
                            <a href={el.text} onClick={(e) => { Copy(e) }}>
                                {(() => {
                                    switch (index) {
                                        case 0:
                                            return <Phone />
                                        case 1:
                                            return <Mail />
                                        case 2:
                                            return <Mark />
                                    }
                                })()}
                                <span>
                                    {el.text}
                                </span>
                            </a>
                        ))}
                    </Links>
                    <OpenTimeTitle>{data.openTimeTitle}</OpenTimeTitle>
                    <OpenTime>
                        {data.openTimes.map(el => (
                            <div >
                                <StructuredText data={el.content} />
                            </div>
                        ))}
                    </OpenTime>
                </TextBox>
                <FormBox>
                    <StructuredText data={data.formTitle} />
                    <Form />
                </FormBox>
            </Flex>
            <Map bg={isDarkTheme ? data.map.url : data.mapWhite.url} />
        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`

    margin-left: clamp(90px, 8vw, 180px);
    margin-top: clamp(90px, 8vw, 180px);
    margin-bottom: clamp(90px, 8vw, 180px);
    
    padding-top: 64px;
    padding-left: 50px;
    padding-right: 280px;
    padding-bottom: 64px;
    box-sizing: border-box;
    border-radius: 12px;
    background-color: ${props => props.theme.isBlackTheme ? props.theme.black.textBG : props.theme.white.textBG};
    box-shadow: ${props => props.theme.isBlackTheme ? props.theme.black.textBGShadow : props.theme.white.textBGShadow};

    h2{
        margin: 0;
        font-size: 40px;
        line-height: 50px;
    }

    h3{
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
        font-size: 24px;
        line-height: 28px;
    }

    iframe{
        width: 100%;
        height: 380px;
        margin-top: 32px;
        border-radius: 8px;
    }
`

const Map = styled.a`
    display: block;
    width: 100%;
    height: 320px;
    background-image: url(${props => props.bg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 8px;
    margin-top: 64px;
`

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

const TextBox = styled.div`
    padding-right: 12%;
    position: relative;

    &::after{
        content: "";
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 1px;
        background-color: ${props => props.theme.isBlackTheme ? props.theme.black.lines : props.theme.white.lines};
    }

    

    h4{
        font-size: 18px;
        line-height: 26px;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
    }

    p{
        font-size: 14px;
        line-height: 20px;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
    }
`

const FormBox = styled.div`
    padding-left: 12%;

`

const Links = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 20px;
    padding-top: 30px;

    a{
        display: flex;
        align-items: center;
        text-decoration: none;
        
        svg{
            transition: all .2s linear;
            filter: grayscale(100%);
            width: 22px;
        }

        span{
            margin-left: 8px;
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
            transition: .2s linear;
            font-size: 14px;
            line-height: 20px;
        }

            
        &:hover{
            span{
                color: ${props => props.theme.white.text.active};
            }

            svg{
                filter: unset;
            }
        }
    }

`

const OpenTimeTitle = styled.h4`
    margin: 24px 0 8px;
`

const OpenTime = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: clamp(16px, 2vw, 64px);

    h6{
        margin: 0;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
        font-size: 14px;
        line-height: 20px;
    }

    p{
        margin: 0;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
        font-size: 14px;
        line-height: 20px;
        font-weight: 500;
    }
`