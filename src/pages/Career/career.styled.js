import styled from 'styled-components'
import { iconStar } from '../../assets/index'
import { theme } from '../../theme'


export const ContainerHeader = styled.div`
  background: ${theme.colors.white20};
  position: relative;
  z-index: 55;

  #divider {
    margin-top: -2%;
    position: absolute;
    z-index: 666;
    width: 100%;
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

  h3 {
    padding-bottom: 15px;
    text-align: left;
  }


  @media screen and (max-width: 1200px) {
    padding: 0 6%;
    width: fit-content;

    h1 {
      padding-top: 40px;
    }

    h3 {
      font-size: 1rem;
    }
  }

  @media screen and (max-width: 479px) {
    h3 {
      padding-bottom: 15px;
    }

    h1 {
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
  margin: 0 auto;
  
  p {
    font-family: Raleway, sans-serif;
    background-image: url(${iconStar});
    background-position: 0% 4px;
    background-repeat: no-repeat;
    background-size: auto;
    color: ${theme.colors.black20};
    font-size: 16px;
    line-height: 30px;
    margin-bottom: 10px;
    padding-left: 40px;
    text-align: initial;
  }
`

export const WhatsappLink = styled.a`
  background: none;
  border: 2px solid ${theme.colors.gold20} ;
  font-size: 0.75em;
  font-weight: 600;
  letter-spacing: .2em;
  line-height: 1.2em;
  padding: 14px;
  text-transform: uppercase;

  :hover {
    background: black;
    border: none;
    color: ${theme.colors.white100};
  }
`

export const ContainerApply = styled.div`
  margin: 6% 25%;
  text-align: center;

 .button-contact {
    margin: 2rem;    
  }

  h2 {
    padding-bottom: 45px;
  }

  @media screen and (max-width: 1300px) {
    margin: 6% 15%;
  }

  @media screen and (max-width: 479px) {
    margin: 6%;
  }

`