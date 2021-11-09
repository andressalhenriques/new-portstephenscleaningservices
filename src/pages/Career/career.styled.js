import styled from 'styled-components'
import { iconStar } from '../../assets/index'


export const ContainerHeader = styled.div`
  background: #F7F9F9;
  z-index: 55;
  position: relative;

  #divider {
    width: 100%;
    margin-top: -2%;
    position: absolute;
    z-index: 666;
  }

`


export const Container = styled.div`

  #dividerTop {
     width: 100%;
  }

  @media screen and (max-width: 479px) {
    #dividerTop {
      margin-top: -1%;
      position: absolute;
    }
  }
`

export const ContainerAboutBody = styled.div`
  width: 528px;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(
  0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg);
  transform-style: preserve-3d;
  margin-bottom: 65px;
  align-self: center;

  h2 {
    padding-bottom: 15px;
  }

  h3 {
    font-size: 1.7em;
    line-height: 1.8em;
    font-weight: 300;
  }

  h2, h3, h4 {
    font-weight: 500;
  }

  #companyName {
    font-weight: bold;
  }

  @media screen and (max-width: 1200px) {
    padding: 0 30px;

    h1 {
      padding-top: 40px;
    }
  }

  @media screen and (max-width: 479px) {
    width: fit-content;
    padding: 0 30px;

    h3 {
      font-size: 1.5em;
      padding-bottom: 15px;
    }

    h1 {
      font-size: 36px;
      padding-top: 40px;
    }
  }
`

export const ContainerAbout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;

  margin: 0 auto;
  max-width: 1138px;
  width: 1138px;
  img {
    width: 100%;
  }

  @media screen and (max-width: 1200px) {
    max-width: none;
    width: 100%;
    grid-template-columns: 1fr;
  }

`

export const ContainerP = styled.div`
  padding-top: 35px;
  p {
    margin-bottom: 10px;
    color: #1c1c1c;
    font-size: 16px;
    line-height: 30px;
    background-image: url(${iconStar});
    background-position: 0% 4px;
    background-size: auto;
    background-repeat: no-repeat;
    padding-left: 40px;
    text-align: initial;
    font-family: Raleway, sans-serif;
  }
`

export const WhatsappLink = styled.a`
  border: 2px solid #C9AF45;
  padding: 14px;
  letter-spacing: .2em;
  background: none;
  font-size: 0.75em;
  text-transform: uppercase;
  line-height: 1.2em;
  font-weight: 600;

  :hover {
    color: #ffffff;
    background: black;
    border: none;
  }
`

export const BodyContainer = styled.div`
  background: #F8FAFA;

  #dividerBottom {
    margin-bottom: -5px;
    width: 100%;
  }

  #lastElement {
   padding-bottom: 1em;
   padding-top: 1em;
   border-top: 1px solid #DCDCDC;
  }

  h3 {
    padding-bottom: 20px;
  }
  /* padding: 25px 30px; */

  /* #secondElement{
    padding-top: 7%;
  }
  h3 {
    margin-bottom: 1em;
    line-height: 1.2em;
    font-size: 0.75em;
    letter-spacing: 0.15em;
    text-transform: uppercase;
  } */

  .containerTitle{
    padding: 15px 0 25px 0;
    font-size: 64px;
    font-weight: 500;
  }

  h4 {
    font-weight: 500;
    width: 48%;
    line-height:24px;
    padding-bottom: 25px;
  }

  @media screen and (max-width: 479px) {
    .containerTitle {
      font-size: 32px;
    }
  }
`

export const ContainerDocuments = styled.div`
  margin: 0 30px;
  #title {
    line-height: 1.7em;
    font-size: 20px;
    letter-spacing: 0.15em;
  }

  h4 {
    font-weight: 500;
  }

  @media screen and (max-width: 479px) {
    #title {
      font-size: 15px;
    }

    h4 {
      width: fit-content;
    }
  }
`
export const ContainerList = styled.div`
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-column-gap: 40px;

  /* p {
    font-size: 1rem;
    margin-bottom: 24px;
    padding-bottom: 0;
    padding-top: 25px;
    line-height: 170%;
  }

  h3 {
    margin: 20px 0;
  } */

  @media screen and (max-width: 479px) {
    grid-template-columns: 1fr;
    grid-row-gap: 30px;
    /* h3 {
      margin-top: 5px;
    } */
  }
`

export const ContainerApply = styled.div`
  padding: 30px 0;
  text-align: center;

  h2 {
    padding-bottom: 45px;
  }

`

export const ContainerBecomeACleaner = styled.div`
  display: grid;
  row-gap: 4em;
  width: 65%;
  margin: 0 auto;

  @media screen and (max-width: 1300px) {
    width: auto;
  }
`
