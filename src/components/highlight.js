import React from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';
import { StaticImage } from "gatsby-plugin-image"
import { Complete } from "../constants/icons";


const Highlight = ({ data }) => {
    return (
        <Wrapper id="oNas">
            <StructuredText data={data.title} />
            <Benefits>
                {data.benefits.map((el, index) => (
                    <div key={el} className={'div' + index}>
                        <span>
                            <Complete />
                            <h4>{el.title}</h4>
                        </span>
                        <p>{el.text}</p>
                    </div>
                ))}
            </Benefits>
            <Texts>
                <div>
                    <StructuredText data={data.leftText} />
                </div>
                <div>
                    <StructuredText data={data.rightText} />
                </div>
            </Texts>
        </Wrapper>
    )
}

export default Highlight

const Wrapper = styled.section`
    padding-top: clamp(55px, 8.6vw, 167px);
    padding-left: clamp(55px, 8.6vw, 167px);
    padding-right: clamp(55px, 8.6vw, 167px);

    h2{
        margin: 0;
        font-size: 40px;
        line-height: 50px;
    }

    @media (max-width: 876px) {
        padding-right: 0;
    }

    @media (max-width: 876px) {
        padding-top: 120px;
        padding-left: 40px;
        padding-right: 40px;
    }
    
    @media (max-width: 539px){
        padding-top: 70px;
        padding-right: 32px;
        padding-left: 32px;

        h2{
            font-size: 32px;
            line-height: 40px;
        }
    }
`

const Benefits = styled.div`
    padding: 42px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    div{
        padding: 0 clamp(24px, 2.5vw, 48px) ;
        position: relative;

        &::after{   
            content: "";
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            width: 1px;
            background-color: ${props => props.theme.isBlackTheme ? props.theme.black.lines : props.theme.white.lines};
        }

        &.div0{
            padding-left: 0px;
        }

        &.div3{
            padding-right: 0px;

            &::after{
                display: none;
            }
        }

        span{
            display: flex;
            align-items: flex-start;

            h4{
                margin: 0 0 8px 8px;
                font-size: 18px;
                color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
            }
        }

        p{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            font-size: 14px;
            line-height: 20px;
            margin-top: 8px;
            margin-bottom: 0;
        }
    }

    @media (max-width: 876px) {
        grid-template-columns: 272px 272px;
        grid-row-gap: 48px;

        div{
            padding-right: 48px;

            &.div1{
                padding-left: 48px;
                padding-right: 0;

                &::after{
                    display: none;
                }
            }

            &.div2{
                padding-left: 0;
            }

            &.div3{
                padding-left: 48px;
                padding-right: 0;
            }

            p{
                max-width: 224px;
                width: 100%;
            }
        }
    }

    @media (max-width: 639px) {
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 539px){
        grid-template-columns: 1fr;
        grid-row-gap: 32px;

        div{

            &.div0, &.div1, &.div2, &.div3{
                padding: 0;
            }

            &::after{
                display: none;
            }
        }
    }
`

const Texts = styled.div`
    border-radius: 12px;
    box-sizing: border-box;
    padding: clamp(27px, 2.81vw, 54px) clamp(31px, 3.22vw, 62px);
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.isBlackTheme ? props.theme.black.textBG : props.theme.white.textBG};
    box-shadow: ${props => props.theme.isBlackTheme ? props.theme.black.textBGShadow : props.theme.white.textBGShadow};
    transition: all .2s linear;

    div{
        padding-right: clamp(80px, 8vw, 160px);
    }

    h3{
        font-size: 18px;
        line-height: 26px;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
    }

    p{
        font-size: 14px;
        line-height: 20px;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
    }

    @media (max-width: 876px) {
        display: grid;
        grid-row-gap: 64px;
        padding: 57px 0 64px 76px;

        h3{
            max-width: 387px;
            width: 100%;
            margin-top: 0;
            margin-bottom: -8px;

        }

        p{
            max-width: 387px;
            width: 100%;
            margin-bottom: 0;
            margin-top: 16px;
        }
    }

    @media (max-width: 539px){
        padding: 0;
        background: 0;
        box-shadow: unset;
        grid-row-gap: 32px;
    }
`