import React from "react";
import styled from "styled-components";
import { DiscBreak, Piston, Spark, Suspension, Filter, Door, Verified, AirPump, colors } from "../constants/icons";

const PriceTab = ({ isDarkTheme, index, title }) => {



    return (
        <TabWrapper id={'tab' + index} className='tab'>
            {(() => {
                switch (index) {
                    case 0:
                        return <DiscBreak color={isDarkTheme ? colors.white : colors.black} />
                    case 1:
                        return <Piston color={isDarkTheme ? colors.white : colors.black} />
                    case 2:
                        return <Spark color={isDarkTheme ? colors.white : colors.black} />
                    case 3:
                        return <Suspension color={isDarkTheme ? colors.white : colors.black} />
                    case 4:
                        return <Filter color={isDarkTheme ? colors.white : colors.black} />
                    case 5:
                        return <Door color={isDarkTheme ? colors.white : colors.black} />
                    case 6:
                        return <Verified color={isDarkTheme ? colors.white : colors.black} />
                    case 7:
                        return <AirPump color={isDarkTheme ? colors.white : colors.black} />
                }
            })()}
            <h4>{title}</h4>
        </TabWrapper>
    )
}

export default PriceTab

const TabWrapper = styled.div`
    margin-right: clamp(16px, 3.33vw, 64px);
    margin-bottom: 24px;
    display: flex;
    flex-direction: column;
    text-align: center;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    svg{
        transition: all .2s linear;
        filter: grayscale(100%);
    }

    h4{
        margin: 0;
        padding: 6px;
        position: relative;
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
        transition: .2s linear;

        &::after{
            content: "";
            width: 100%;
            height: 1px;
            position: absolute;
            bottom: 0;
            left: 0;
            right: 0;
            background-color: ${props => props.theme.isBlackTheme ? props.theme.black.background : props.theme.white.background};
            transition: .2s linear;
        }

    }

    &.active{
        svg{
            filter: unset;
        }

        h4{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
            &::after{
                background-color: ${props => props.theme.black.text.active};
            }
        }
    }

    &:hover{
        svg{
            filter: unset;
        }

        h4{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
            &::after{
                background-color: ${props => props.theme.black.text.active};
            }
        }
    }
`