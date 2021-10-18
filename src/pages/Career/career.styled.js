import styled from 'styled-components'
import { iconStar } from '../../assets/index'

export const ContainerHeader = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background: #F7F9F9;

  padding-top: 30px;

  #divider {
    width: 100%;
  }

  #big-image {
    position: absolute;
    left: 50%;
    top: 11%;
    right: 0%;
    bottom: 0%;
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  h3 {
    padding: 20px 0;
    font-weight: 400;
  }

  h4 {
    padding-bottom: 20px;
  }

@media screen and (max-width: 1050px) {
  #big-image {
    left: 65%;
  }

}

@media screen and (max-width: 479px) {
  padding: 31px 16px 0 16px;

  #small-image {
    display: none;
  }

  #big-image {
    top: 12%;
  }
}
`

export const ContainerBody = styled.div`
  width: 528px;
  opacity: 1;
  padding-bottom: 174px;
  transform: translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(
  0deg) rotateY(0deg) rotateZ(0deg) skew(0deg,0deg);
  transform-style: preserve-3d;

  @media screen and (max-width: 479px) {
    h1 {
      font-size: 36px;
    }
  }
`

export const ContainerAbout = styled.div`
  display: flex;

  margin-left: auto;
  margin-right: auto;
  max-width: 1000px;
  width: 1000px;

  @media screen and (max-width: 1050px) {
    max-width: 728px;
  }

  @media screen and (max-width: 479px) {
    height: auto;
    max-width: none;
    padding-bottom: 32px;
    width: 100%;
  }
`

export const ContainerP = styled.div`

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


  @media screen and (max-width: 479px) {
    padding-top: 83px;
  }
`
