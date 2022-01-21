import React from "react";
import styled from "styled-components";
import { StructuredText } from 'react-datocms';

const Footer = ({ data }) => {
    return (
        <Wrapper>
            <TextBox>
                <StructuredText data={data.title} />
                <StructuredText data={data.textContent} />
            </TextBox>
            <FormBox>
                <StructuredText data={data.formTitle} />
                {data.links.map((el, index) => (
                    <div>
                        {/* {(() => {
                            switch (index) {
                                case 0:
                                    return <DiscBreak color={isDarkTheme ? colors.white : colors.black} />
                                case 1:
                                    return <Piston color={isDarkTheme ? colors.white : colors.black} />
                                case 2:
                                    return <Spark color={isDarkTheme ? colors.white : colors.black} />
                            }
                        })()} */}
                    </div>
                ))}
            </FormBox>
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
    display: grid;
    grid-template-columns: 1fr 1fr;

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