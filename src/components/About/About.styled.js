import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`

  margin-left: auto;
  margin-right: auto;
  max-width: 65%;
  padding: 70px 0;

  h2 {
    font-family: 'DM Serif Display',sans-serif;
    font-size: 64px;
    font-weight: 500;
    line-height: 120%;
    text-align: center;
    margin-bottom: 24px;
  }

  h3 {
    text-align: center;
    margin-bottom: 16px;
    font-family: 'Henderson Bold', sans-serif;
    color: #1c1c1c;
    font-size: 14px;
    line-height: 170%;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  @media screen and (max-width: 900px) {
    padding: 0 20px;
  }
`


export const ContainerTitle = styled.div`
    align-self: center;

  h5:nth-child(3) {
    padding-top: 30px;
  }
`

export const Services = styled.div`

  @media screen and (max-width: 900px) {
    justify-self: center;
    padding: 20px 0;
  }

`

export const ContainerHeader = styled.div`
   justify-content: center;
    margin: 0 auto;
    width: 100%;
    padding-top: 30px;

    grid-column-gap: 24px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;

  p {
    margin-bottom: 0;
    padding-bottom: 0;
    padding-top: 15px;
    font-size: 1rem;
    line-height: 1.3;

    display: -webkit-box;
    -webkit-line-clamp: 9;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  img {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 1300px) {


  }

`
export const SubTitle = styled.h5`
  line-height: 1.2em;
  font-size: 0.75em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`
