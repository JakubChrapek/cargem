import React from 'react'
import { StructuredText } from 'react-datocms'
import { GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import { Arrow } from '../constants/icons'

const Faq = ({ data, isDarkTheme }) => {
  return (
    <Wrapper id='faq'>
      <SideImg
        image={data.enginePhoto.gatsbyImageData}
        alt={data.enginePhoto.alt}
      />
      <StructuredText data={data.title} />
      <Questions isDarkTheme={isDarkTheme}>
        {data.questions.map((el, index) => (
          <React.Fragment key={el.title}>
            {index ? (
              <details >
                <summary
                  itemProp='mainEntity'
                  itemType='https://schema.org/Question'>
                  <span itemProp='name'>
                    <Arrow />
                    {el.title}
                  </span>
                </summary>
                <p
                  itemProp='acceptedAnswer'
                  itemType='https://schema.org/Answer'>
                  <span itemProp='text'>{el.text}</span>
                </p>
              </details>
            ) : (
              <details open>
                <summary
                  itemProp='mainEntity'
                  itemType='https://schema.org/Question'>
                  <span itemProp='name'>
                    <Arrow />
                    {el.title}
                  </span>
                </summary>
                <p
                  itemProp='acceptedAnswer'
                  itemType='https://schema.org/Answer'>
                  <span itemProp='text'>{el.text}</span>
                </p>
              </details>
            )}
          </React.Fragment>
        ))}
      </Questions>
    </Wrapper>
  )
}

export default Faq

const Wrapper = styled.section`
  padding-top: clamp(48px, 9.31vw, 180px);
  padding-left: clamp(55px, 8.6vw, 167px);
  padding-right: clamp(240px, 25vw, 480px);
  position: relative;
  overflow: hidden;

  h2 {
    margin-top: 0;
    margin-bottom: 40px;
    font-size: 40px;
    line-height: 50px;
  }

  @media (max-width: 876px) {
    padding-left: 40px;
    padding-right: 40px;
  }

  @media (max-width: 539px) {
    padding-right: 32px;
    padding-left: 32px;
  }
`

const Questions = styled.div`
  details {
    list-style: none;
    list-style-type: none;
    margin-top: 32px;
    padding-bottom: 16px;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      width: 100%;
      height: 1px;
      background-color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.lines
      : props.theme.white.lines};
    }
  }

  summary {
    list-style: none;
    list-style-type: none;
    cursor: pointer;

    &::-webkit-details-marker {
      display: none;
    }

    &::marker {
      display: none;
    }

    svg {
      height: 18px;
      transition: all 0.2s linear;
      margin-right: 8px;
    }

    span {
      color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.text.main
      : props.theme.white.text.main};
      font-size: 24px;
      line-height: 32px;
      font-weight: 500;
      position: relative;
      font-weight: ${(props) =>
    props.isDarkTheme ? '500' : '600'};
    }
  }

  p {
    margin: 8px 0 0 0;

    span {
      color: ${(props) =>
    props.isDarkTheme
      ? props.theme.black.text.sub
      : props.theme.white.text.sub};
      font-size: 14px;
      line-height: 20px;
      font-weight: ${(props) =>
    props.isDarkTheme ? '400' : '500'};
    }

    @media (max-width: 876px) {
      margin-top: 16px;
    }
  }
`

const SideImg = styled(GatsbyImage)`
  position: absolute !important;
  right: 0;
  top: clamp(55px, 9.31vw, 180px);
  transform: translateX(50%);

  @media (max-width: 876px) {
    display: block;
    position: relative !important;
    transform: unset;
    margin: 0 auto;
    top: 0;
    padding-bottom: 54px;
    width: 100%;
    img {
      object-fit: contain !important;
    }
  }

  @media (max-width: 539px) {
    padding-bottom: 34px;
  }
`
