import React from "react"
import { StructuredText } from "react-datocms"
import styled from "styled-components"
import { Arrow } from "../constants/icons"

const Faq = ({ data }) => {
    return (
        <Wrapper id="faq">
            <SideImg src={data.enginePhoto.url} alt={data.enginePhoto.alt} />
            <StructuredText data={data.title} />
            <Questions>
                {data.questions.map(el => (
                    <details>
                        <summary itemProp="mainEntity" itemType="https://schema.org/Question">
                            <span itemProp="name">
                                {el.title}
                            </span>
                            <Arrow />
                        </summary>
                        <p itemProp="acceptedAnswer" itemType="https://schema.org/Answer">
                            <span itemProp="text">
                                {el.text}
                            </span>
                        </p>
                    </details>
                ))}
            </Questions>
        </Wrapper>
    )
}

export default Faq

const Wrapper = styled.section`
    padding-left: clamp(40px, 9.31vw, 180px);
    padding-right: clamp(240px, 25vw, 480px);
    position: relative;
    overflow: hidden;

    h2{
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 40px;
        line-height: 50px;
    }

    @media (max-width: 876px) {
        padding-left: 40px;
        padding-right: 40px;
    }
`

const Questions = styled.div`

    details{
        margin-top: 32px;
        padding-bottom: 16px;
        position: relative;

        &::after{
            content: "";
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            width: 100%;
            height: 1px;
            background-color: ${props => props.theme.isBlackTheme ? props.theme.black.lines : props.theme.white.lines};
        }
    }


    summary{
        list-style: none;
        cursor: pointer;
        display: flex;
        align-items: center;

        svg{
            transition: all .2s linear;
            margin-left: 8px;
        }

        span{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
            font-size: 24px;
            line-height: 32px;
            font-weight: 500;
            position: relative;
        }
    }

    p{
        span{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            font-size: 14px;
            line-height: 20px;
        }
    }
`

const SideImg = styled.img`
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(50%);

    @media (max-width: 876px) {
        display: block;
        position: relative;
        transform: unset;
        margin: 0 auto 54px;
        width: 100%;
    }
`