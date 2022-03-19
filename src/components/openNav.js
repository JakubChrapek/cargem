import styled from 'styled-components'

export const OpenNav = styled.div`
  @media (min-width: 1240px) {
    display: none;
  }

  z-index: 10000;
  position: fixed !important;
  left: 32px;
  top: 35px;
  width: 20px;
  height: 18px;
  cursor: pointer;
  mix-blend-mode: exclusion;

  &::after {
    width: 20px;
    height: 2px;
    content: '';
    background-color: ${(props) =>
      props.theme.black.text.main};
    mix-blend-mode: exclusion;
    position: absolute;
    right: 0;
    left: 0;
    top: 100%;
  }

  &::before {
    width: 20px;
    height: 2px;
    content: '';
    background-color: ${(props) =>
      props.theme.black.text.main};
    mix-blend-mode: exclusion;
    position: absolute;
    right: 0;
    left: 0;
    top: 0;
  }

  span {
    width: 20px;
    height: 2px;
    background-color: ${(props) =>
      props.theme.black.text.main};
    mix-blend-mode: exclusion;
    position: absolute;
    right: 0;
    left: 0;
    top: 50%;
  }

  @media (max-width: 876px) {
    left: 10px;
  }

  @media (max-width: 539px) {
    left: 6px;
  }
`
