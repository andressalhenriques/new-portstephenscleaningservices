import styled from 'styled-components'
import { iconStar } from '../../assets/index'

export const Container = styled.div`
  text-align: center;
  padding: 165px 0;
  background-color: #F6F6F1;
  position: relative;


  #dogShootingstar, #shootingstar {
    max-width: 100%;
    vertical-align: middle;
    display: inline-block;
  }

  #dogShootingstar {
    position: absolute;
    left: 30%;
    top: auto;
    right: 0%;
    bottom: 0%;
  }

  #shootingstar {
    position: absolute;
    top: 3%;
    right: 35%;
    bottom: auto;
  }

@media screen and (max-width: 900px) {
  padding: 25px 0 100px 0;
}

@media screen and (max-width: 479px) {
  #dogShootingstar {
    left: 0;
  }
  #shootingstar {
    top: 25%;
    right: 21%;
  }
}
`

export const ContainerGrid = styled.div`
  max-width: 940px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-column-gap: 59px;
  text-align: initial;
  padding-bottom: 50px;

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

  p:nth-child(1) {
    color: #5d5d5c;
    font-size: 16px;
    background-image: none;
    padding-left: 0;
  }

  @media screen and (max-width: 900px) {
    padding: 0 20px 50px 20px;
    grid-template-columns: 1fr;
  }

  @media screen and (max-width: 479px) {
    p:nth-child(1) {
      padding-top: 35px;
    }
  }

`

export const Title = styled.h2`
  margin-top: 0px;
  margin-bottom: 24px;
  font-family: Yaldevi, sans-serif;
  color: #1c1c1c;
  font-size: 46px;
  line-height: 120%;

  @media screen and (max-width: 479px) {
    font-size: 36px;
  }
`

export const ContainerP = styled.div`
  width: fit-content;
`
