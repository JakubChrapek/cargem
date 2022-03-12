import styled from 'styled-components'

export const Container = styled.div`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: clamp(273px, 19.1vw, 367px) 1fr;
  position: relative;

  @media (max-width: 1240px) {
    grid-template-columns: 1fr;
  }
`
