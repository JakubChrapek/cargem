import React from 'react'
import styled from 'styled-components'
import {
  DiscBreak,
  Piston,
  Spark,
  Suspension,
  Filter,
  Door,
  Verified,
  AirPump,
  colors
} from '../constants/icons'

const PriceTab = ({
  isDarkTheme,
  index,
  title,
  chosenIndex
}) => {
  return (
    <TabWrapper
      isDarkTheme={isDarkTheme}
      id={'tab' + index}
      className={`${
        chosenIndex === index ? 'active' : null
      } tab`}>
      {(() => {
        switch (index) {
          case 0:
            return (
              <DiscBreak
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 1:
            return (
              <Piston
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 2:
            return (
              <Spark
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 3:
            return (
              <Suspension
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 4:
            return (
              <Filter
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 5:
            return (
              <Door
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 6:
            return (
              <Verified
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          case 7:
            return (
              <AirPump
                color={
                  isDarkTheme ? colors.white : colors.black
                }
              />
            )
          default:
            return null
        }
      })()}
      <h4>{title}</h4>
    </TabWrapper>
  )
}

export default PriceTab

const TabWrapper = styled.button`
  margin-right: clamp(16px, 3.33vw, 64px);
  margin-bottom: 32px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: none;
  padding: 0;

  svg {
    transition: all 0.2s linear;

    path {
      transition: 0.2s linear;
      fill: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.sub
          : props.theme.white.text.sub};
    }
  }

  h4 {
    margin: 0;
    padding: 6px 0;
    position: relative;
    color: ${(props) =>
      props.isDarkTheme
        ? props.theme.black.text.sub
        : props.theme.white.text.sub};
    transition: 0.2s linear;
    font-size: 18px;
    line-height: 26px;
    font-weight: ${(props) =>
      props.isDarkTheme ? '500' : '600'};

    &::after {
      content: '';
      width: 100%;
      height: 1px;
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.background
          : props.theme.white.background};
      transition: 0.2s linear;
    }
  }

  &:hover {
    svg {
      path {
        transition: 0.2s linear;
        fill: ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.hover
            : props.theme.white.text.hover};
      }
    }

    h4 {
      color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.hover
          : props.theme.white.text.hover};
    }
  }

  &.active {
    svg {
      path {
        transition: 0.2s linear;
        fill: ${(props) =>
          props.isDarkTheme
            ? props.theme.black.text.main
            : props.theme.white.text.main};

        &.blue {
          fill: ${(props) =>
            props.isDarkTheme
              ? props.theme.black.text.active
              : props.theme.white.text.active};
        }
      }
    }

    h4 {
      color: ${(props) =>
        props.isDarkTheme
          ? props.theme.black.text.main
          : props.theme.white.text.main};
      &::after {
        background-color: ${(props) =>
          props.theme.black.text.active};
      }
    }
  }

  @media (max-width: 876px) {
    margin-right: 48px;
  }

  @media (max-width: 640px) {
    margin-right: 24px;
    margin-bottom: 25px;
  }

  @media (max-width: 539px) {
    margin-right: 20px;

    h4 {
      font-size: 14px;
      line-height: 20px;
      max-width: 120px;
    }
  }
`
