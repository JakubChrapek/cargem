import React from "react";
import styled from "styled-components";
import { StructuredText } from "react-datocms";
import { StaticImage } from "gatsby-plugin-image"

const Offer = ({ data, isDarkTheme }) => {
    return (
        <Wrapper>
            <StructuredText data={data.title} />
            <ItemsBox>
                {data.items.map(el => (
                    <div>
                        <span>
                            <img src={isDarkTheme ? el.icon.url : el.iconWhite.url} alt={isDarkTheme ? el.icon.alt : el.iconWhite.alt} />
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
    padding-top: 180px; // change to clamp
    padding-left: 170px; // change to m auto
    padding-right: 200px;
    padding-bottom: 180px; // cennik doesnt need padtop more
    position: relative;

`

const Car = styled.img`
    position: absolute;
    bottom: 0;
    right: 0;
`

const ItemsBox = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 64px;
    grid-row-gap: 64px;

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