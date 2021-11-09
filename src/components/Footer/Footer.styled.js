import styled from 'styled-components'
import { theme } from '../../theme'


export const Container = styled.div`
  padding: 10px 30px;
  color: ${theme.colors.black10};

  p {
    text-align: center;
  }

  h3 {
    text-transform: uppercase;
    padding-bottom: 20px;
    letter-spacing: 3px;
  }


  @media screen and (max-width: 900px) {
    padding: 20px 30px;

    p {
      padding-top: 27px;
    }
  }

`

export const ContainerSocial = styled.div`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 15px;
  text-align: center;

  .animatedElement {
    width: 60px;
    height: 60px;
    background: ${theme.colors.grey20};

    margin: 10px;
    border-radius: 30%;
    box-shadow: 0 5px 15px -5px #00000070;
    color: ${theme.colors.green10};
    overflow: hidden;
    position: relative;
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .animatedElement svg {
    line-height: 90px;
    font-size: 26px;
    transition: 0ms.2s linear;
  }

  .animatedElement:hover svg {
    transform: scale(1.3);
  }
`
