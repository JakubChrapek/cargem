import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms";
import PriceTab from "./priceTab";
import PriceContent from "./priceContent";

const Price = ({ data, isDarkTheme }) => {

    const [choosenIndex, setChooseIndex] = useState("0")


    return (
        <Wrapper>
            <StructuredText data={data.title} />
            <TextBox isDarkTheme={isDarkTheme}>
                <StructuredText data={data.leftText} />
                <StructuredText data={data.rightText} />
            </TextBox>
            <TabsChoose>
                {data.tabs.map((el, index) => (
                    <li onClick={() => { setChooseIndex(index) }}>
                        <PriceTab choosenIndex={choosenIndex} isDarkTheme={isDarkTheme} index={index} title={el.title} />
                    </li>
                ))}
            </TabsChoose>
            <TabsContent >
                {data.tabs.map((el, index) => (
                    <PriceContent choosenIndex={choosenIndex} isDarkTheme={isDarkTheme} index={index} items={el.items} />
                ))}

            </TabsContent>
        </Wrapper>
    )
}

export default Price

const Wrapper = styled.section`
    padding-left: clamp(55px, 8.6vw, 167px);
    padding-right: clamp(55px, 8.6vw, 167px);

    h2{
        margin-top: 0;;
        margin-bottom: 40px;
        font-size: 40px;
        line-height: 50px;
    }

    @media (max-width: 876px) {
        padding-left: 40px;
        padding-right: 40px;
        padding-bottom: 65px;
    }
    
    @media(max-width: 539px){
        padding-right: 32px;
        padding-left: 32px;
    }
`

const TextBox = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    grid-column-gap: 64px;
    margin-bottom: 54px;

    p{
        color: ${props => props.isDarkTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
        margin: 0;
        font-size: 14px;
        line-height: 20px;
    }

    @media (max-width: 1300px) {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: 48px;
    }

    @media (max-width: 876px) {
        grid-template-columns: 1fr;
        grid-row-gap: 64px;
        margin-bottom: 84px;

        p{
            max-width: 354px;
        }
    }

    @media(max-width: 539px){
        grid-row-gap: 24px;
        margin-bottom: 40px;
    }
`

const TabsChoose = styled.ul`
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin: 0;

    li{
        list-style: none;
    }

    @media (max-width: 640px){
    }
`

const TabsContent = styled.div`
    position: relative;
    overflow: hidden;
`