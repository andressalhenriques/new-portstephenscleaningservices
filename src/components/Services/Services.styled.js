import styled from 'styled-components'
import { homeShootingstar, iconStar } from '../../assets/index'

export const Container = styled.div`
  text-align: center;
  padding: 110px 0;
  background-image: url(${homeShootingstar});
  background-position: 50% 100%;
  background-size: auto;
  background-repeat: no-repeat;


  background-color: #F6F6F1;

@media screen and (max-width: 1000px) {


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

  #companyName {
    color: #fa7b6a;
  }

  p {
    margin-bottom: 24px;
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

`
// export const Title = styled.h2`
//   font-family: 'Cinzel',serif;
//   font-size: 2em;
//   line-height: 25.5px;
//   font-weight: 300;
//   width: 100%;
//   white-space: pre-wrap;
//   transition-timing-function: ease;
//   transition-duration: 0.9s;
//   transition-delay: 0.171429s;
//   font-size: 3em;
//   padding-bottom: 40px;


//   @media screen and (max-width: 500px) {
//     grid-column-end: 4;
//     font-size: 1.5em;
//   }

// `

export const Title = styled.h2`
    margin-top: 0px;
    margin-bottom: 24px;
    font-family: Yaldevi, sans-serif;
    color: #1c1c1c;
    font-size: 46px;
    line-height: 120%;

`

export const ContainerP = styled.h2`
    width: fit-content;

`
