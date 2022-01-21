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
    padding-top: 180px; // change to clamp
    padding-left: 170px; // change to m auto
    padding-right: 200px;

`

const Benefits = styled.div`
    padding: 42px 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

    div{
        padding: 0 40px ;
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
            align-items: center;

            h4{
                margin-left: 8px;
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
    padding: 50px 60px;
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.isBlackTheme ? props.theme.black.textBG : props.theme.white.textBG};
    box-shadow: ${props => props.theme.isBlackTheme ? props.theme.black.textBGShadow : props.theme.white.textBGShadow};
    transition: all .2s linear;

    div{
        padding-right: 160px; // clamp change
    }

    h4{
        font-size: 18px;
        line-height: 26px;
    }

    p{
        font-size: 14px;
        line-height: 20px;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
    }
`