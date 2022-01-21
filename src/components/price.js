import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { StructuredText } from "react-datocms";
import PriceTab from "./priceTab";
import PriceContent from "./priceContent";

const Price = ({ data, isDarkTheme }) => {

    const [choosenIndex, setChooseIndex] = useState("0")

    useEffect(() => {
        let tabs = document.getElementsByClassName('tab')
        let tabsContent = document.getElementsByClassName('tabContent')
        for (let i = 0; i < tabs.length; i++) {
            if (i == choosenIndex) {
                tabs[i].classList.add('active')
                tabsContent[i].classList.add('active')
            } else {
                tabs[i].classList.remove('active')
                tabsContent[i].classList.remove('active')
            }
        }
    }, [choosenIndex, isDarkTheme])

    return (
        <Wrapper>
            <StructuredText data={data.title} />
            <TextBox>
                <StructuredText data={data.leftText} />
                <StructuredText data={data.rightText} />
            </TextBox>
            <TabsChoose>
                {data.tabs.map((el, index) => (
                    <span onClick={() => { setChooseIndex(index) }}>
                        <PriceTab isDarkTheme={isDarkTheme} index={index} title={el.title} />
                    </span>
                ))}
            </TabsChoose>
            <TabsContent>
                {data.tabs.map((el, index) => (
                    <PriceContent isDarkTheme={isDarkTheme} index={index} items={el.items} />
                ))}

            </TabsContent>
        </Wrapper>
    )
}

export default Price

const Wrapper = styled.section`
    padding-left: 170px; // change to m auto
    padding-right: 200px;

    h2{
        margin-top: 0;;
        margin-bottom: 40px;
        font-size: 40px;
        line-height: 50px;
    }
`

const TextBox = styled.div`
    display: grid;
    grid-template-columns: 350px 350px;
    grid-column-gap: 64px;
    margin-bottom: 60px;

    p{
        color: ${props => props.theme.isBlackTheme ? props.theme.black.text.sub : props.theme.white.text.sub};
    }
`

const TabsChoose = styled.div`
    display: flex;
    flex-wrap: wrap;
`

const TabsContent = styled.div`
    position: relative;
    overflow: hidden;
`