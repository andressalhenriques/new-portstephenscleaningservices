import styled from 'styled-components'
import { iconStar } from '../../assets/index'
import { theme } from '../../theme'

export const Container = styled.div`
  text-align: center;
  background-color: ${theme.colors.white30};
  height: 600px;
  position: relative;



  #divider2 {
    width: 100%;
    margin-top: -2%;
  }

  #shootingStar {
    position: absolute;
    top: 0;
    right: 35%;
    bottom: auto;
  }

@media screen and (max-width: 900px) {
  padding: 25px 0 100px 0;
}

@media screen and (max-width: 479px) {

  #shootingStar {
    display: none;
  }
  height: 515px;
}
`

export const ContainerGrid = styled.div`
  max-width: 1050px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 59px;
  text-align: initial;
  padding-top: 90px;

  .container-title {
    text-align: center;
    align-items: center;
    align-content: center;
    align-self: center;
  }

  h2 {
    color: ${theme.colors.black20};
    margin-top: 0px;
    margin-bottom: 24px;
  }

  p {
    color: ${theme.colors.black20};
    font-family: Raleway, sans-serif;
    font-size: 16px;
    line-height: 36px;
    margin-bottom: 10px;
    padding-left: 40px;
    text-align: initial;
  }

  p:nth-child(1) {
    color: ${theme.colors.grey10};
    font-size: 16px;
    background-image: none;
    padding-left: 0;
  }

  @media screen and (max-width: 900px) {
    padding: 0 30px 50px 30px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 479px) {
    p:nth-child(1) {
      padding-top: 35px;
    }
  }

`

export const ContainerP = styled.div`
  width: fit-content;
  

  h3 {
    text-transform: uppercase;
    line-height: 40px;
    padding-bottom: 16px;
  }

  ul {
    list-style-type: none !important;
  }

  li {
    display: flex;
    align-items: center;
  }

  li:not(:last-child) {
    margin-bottom: 15px;
  }

  .list-icon {
    background: ${theme.colors.orange10};
    color: ${theme.colors.grey20};
    display: flex;
    border-radius: 100px;
    padding: 4px;
    margin-right: 10px;
    text-align: center;
  }

  svg {
    height: 20px;
    width: 20px;
  }
`
