import styled from 'styled-components'
import { iconStar } from '../../assets/index'
import { theme } from '../../theme'

export const Container = styled.div`
  #dividerTop {
    width: 100%;
    margin-top: -2%;
    position: absolute;
    z-index: 666;
  }

  .container-link {
    display: flex;
    flex-direction: column;
    
    a {
      color: #9bad78;
      padding-bottom: 15px;
  
      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
`

export const ContainerContact = styled.div`
  padding: 0 70px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  align-items: center;

  width: 100%;
  max-width: 2000px;
  margin: 6rem auto;

  .container-link {
    flex-direction: row;
  }

  .container-link a {
    padding-right: 20px;
  }

  h2 {
    text-align: left;
    width: 100%;
    max-width: 81%;
  }

  h2:after {
    content: '';
    display: block;
    border-bottom: 1px solid ${theme.colors.gold20};

    width: 100%;
    max-width: 60px;
    height: 2px;
    margin-top: 8px;
  }

  img {
    width: 500px;
  }


  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
    padding: 30px 20px 0 20px;
    h2 {
      max-width: 100%;
    }
  }


  @media screen and (max-width: 479px) {
    padding: 0 30px;
    padding-top: 20px;

    img {
      width: 80%;
    }

    .container-link {
      flex-direction: column;
      text-align: start;
    }

    .container-link:nth-child(2) {
      padding-top: 2rem;
  }
  
    .container-link a {
      padding-right: 0;
    }
  }

`
export const ContainerSlider = styled.div`
  background: ${theme.colors.white10};

  #dividerBottom{
    margin-bottom: -1%;
  }

  img {
    width: 100%;
  }

  @media screen and (max-width: 479px) {
    padding: 0 30px;

    #dividerBottom{
      margin-bottom: -2%;
    }
  }

`

export const SubTitle = styled.p`
  margin: 30px 0;
  word-wrap: break-word;
  width: 100%;
  max-width: 81%;

`
export const WhatsappLink = styled.a`
  border: 2px solid ${theme.colors.gold20};

  padding: 14px;
  letter-spacing: .2em;
  background: none;
  font-size: 0.75em;
  text-transform: uppercase;
  line-height: 1.2em;
  font-weight: 600;

  :hover {
    background: ${theme.colors.black30};
    border: none;
  }
`

export const ContainerImage = styled.div`
  text-align: center;
`

export const ContainerHeader = styled.div`
  background: ${theme.colors.white20};

  z-index: 55;
  position: relative;

  p {
    padding-top: 2%;
    padding-bottom: 7%;
  }

`

export const ContainerBody = styled.div`
  width: 528px;
  opacity: 1;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(
  0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg);
  transform-style: preserve-3d;
  margin-bottom: 65px;
  align-self: center;

  h1 {
    padding-top: 5rem;
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

    #companyName{
      font-size: 34px;
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

  p {
    margin-bottom: 10px;
    color: ${theme.colors.black20};
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

export const WrapperTalkToUs = styled.div`
  padding-top: 3rem;

  div {
    display: flex;
    align-items: start;
    justify-content: space-between;
    padding-top: 1rem;
  }

  p {
    letter-spacing: .2em;
    background: none;
    font-size: 1em;
    text-transform: uppercase;
    line-height: 1.2em;
    font-weight: 600;
    padding: 0;
  }

  @media screen and (max-width: 479px) {
    
    div {
      flex-direction: column;
    }

  }

`

