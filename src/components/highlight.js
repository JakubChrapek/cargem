import React from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';
import { StaticImage } from "gatsby-plugin-image"
import { Complete } from "../constants/icons";


const Highlight = ({ data }) => {
    return (
        <Wrapper>
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
    padding-top: clamp(90px, 9.31vw, 180px);
    padding-left: clamp(90px, 9.31vw, 180px);
    padding-right: clamp(90px, 9.31vw, 180px);

    h2{
        margin: 0;
        font-size: 40px;
        line-height: 50px;
    }

`

const Benefits = styled.div`
    padding: 42px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    div{
        padding: 0 clamp(10px, 2vw, 40px) ;
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
`