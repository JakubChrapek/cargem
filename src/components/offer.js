import React from "react";
import styled from "styled-components";
import { StructuredText } from "react-datocms";
import { StaticImage } from "gatsby-plugin-image"
import { TimingBelt, Door, PaintSpray, Key, AirPump, colors } from "../constants/icons";

const Offer = ({ data, isDarkTheme }) => {
    return (
        <Wrapper>
            <StructuredText data={data.title} />
            <ItemsBox>
                {data.items.map((el, index) => (
                    <div key={el}>
                        <span>
                            {(() => {
                                switch (index) {
                                    case 0:
                                        return <TimingBelt color={isDarkTheme ? colors.white : colors.black} />
                                    case 1:
                                        return <Door color={isDarkTheme ? colors.white : colors.black} />
                                    case 2:
                                        return <PaintSpray color={isDarkTheme ? colors.white : colors.black} />
                                    case 3:
                                        return <Key color={isDarkTheme ? colors.white : colors.black} />
                                    case 4:
                                        return <AirPump color={isDarkTheme ? colors.white : colors.black} />
                                }
                            })()}
                            <h3>{el.title}</h3>
                        </span>
                        <StructuredText data={el.text} />
                    </div>
                ))}
            </ItemsBox>
            <Link href="#">{data.buttonText}</Link>
            <Car src={isDarkTheme ? data.carImg.url : data.carImgWhite.url} />
        </Wrapper>
    )
}

export default Offer

const Wrapper = styled.section`
    padding-top: clamp(90px, 9.31vw, 180px);
    padding-left: clamp(90px, 9.31vw, 180px);
    padding-right: clamp(90px, 9.31vw, 180px);
    padding-bottom: clamp(90px, 9.31vw, 180px);
    position: relative;

    h2{
        margin-top: 0;
        margin-bottom: 40px;
        font-size: 40px;
        line-height: 50px;
    }

`

const Car = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
    width: clamp( 20%, 30vw, 50%);

    @media (max-width: 1800px) {
        bottom: 10%;
    }
    @media (max-width: 1400px) {
        bottom: 15%;
    }
`

const ItemsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: clamp(32px, 3.33vw, 64px);
    grid-row-gap: clamp(32px, 3.33vw, 64px);

    span{
        display: flex;
        align-items: center;
    }

    h3{
        margin: 0 0 0 8px;
        font-size: 24px;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
    }

    h6{
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
        font-size: 16px;
        line-height: 26px;
        padding: 16px 0;
        margin: 0;
    }

    p{
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
        font-size: 14px;
        line-height: 20px;
        padding: 0;
        margin: 0;
    }
`

const Link = styled.a`
    display: block;
    width: 246px;
    margin-top: 75px;
    text-align: center;
    padding: 16px 0;
    border-radius: 8px;
    text-decoration: none;
    text-transform: uppercase;
    transition: .2s linear;
    font-weight: bold;
    background-color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.background : props.theme.white.button.static.background};
    border: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.border : props.theme.white.button.static.border};
    color: ${props => props.theme.isBlackTheme ? props.theme.black.button.static.text : props.theme.white.button.static.text};

    &:hover{
                
    }
`