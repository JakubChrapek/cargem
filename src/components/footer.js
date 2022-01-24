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
                            <a href={el.text} onClick={(e) => {Copy(e)}}>
                                {(() => {
                                    switch (index) {
                                        case 0:
                                            return <Phone color={isDarkTheme ? colors.white : colors.black} />
                                        case 1:
                                            return <Mail color={isDarkTheme ? colors.white : colors.black} />
                                        case 2:
                                            return <Mark color={isDarkTheme ? colors.white : colors.black} />
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
                    <Form/>
                </FormBox>
            </Flex>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1060546.189574823!2d20.49019276924989!3d51.873754927745395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4718a1cc9f0aefcf%3A0xe5275eb73a5fb27b!2sMechanika%20pojazdowa%20%22AIR%22!5e0!3m2!1sru!2spl!4v1643014701199!5m2!1sru!2spl" ></iframe>

        </Wrapper>
    )
}

export default Footer

const Wrapper = styled.footer`
    padding-top: 64px;
    padding-left: 50px;
    padding-right: 280px;
    padding-bottom: 64px;
    margin-left: 170px;
    margin-top: 160px;
    margin-bottom: 200px;
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

const Flex = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;

`

const TextBox = styled.div`
    padding-right: 15%;
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
    padding-left: 15%;

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
    grid-column-gap: 64px;

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