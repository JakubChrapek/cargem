import React from "react"
import { StructuredText } from "react-datocms";
import styled from "styled-components";

const PriceContent = ({ isDarkTheme, index, items }) => {

    return (
        <Grid id={'tabContent' + index} className="tabContent">
            {items.map((el) => (
                <div>
                    <StructuredText data={el.content} />
                </div>
            ))}
            <MoreButton></MoreButton>
        </Grid>
    )
}

export default PriceContent

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    transition: .2s linear;
    opacity: 0;
    pointer-events: none;
    position: absolute;

    &.active{
        opacity: 1;
        pointer-events: all;
        position: relative;
    }


    div{
        padding-right: clamp(50px, 5.2vw, 100px);
        padding-top: 20px;
        padding-bottom: 20px;
        padding-left: 0;
        position: relative;

        &::before{
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 1px;
            background-color: ${props => props.theme.isBlackTheme ? props.theme.black.lines : props.theme.white.lines};
            transition: all .2s linear;
        }

        h6{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.main : props.theme.white.text.main};
            padding-bottom: 4px;
            margin: 0;
            font-size: 18px;
            line-height: 26px;
        }

        p{
            color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
            margin: 0;
            font-size: 18px;
            line-height: 26px;
        }
    }

    @media (max-width: 876px) {
        grid-template-columns: 1fr 1fr;


        div{
            padding: 16px clamp(24px, 6.25vw, 48px) 12px 8px;

            
            :nth-child(2n){
                padding: 16px 8px 12px clamp(24px, 6.25vw, 48px);
                
            }
        }
    }
`

const MoreButton = styled.button`
    display: none;

    @media (max-width: 876px) {
        
    }
`