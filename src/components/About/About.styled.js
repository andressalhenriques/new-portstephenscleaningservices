import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 65%;
  padding: 70px 0;

  h2 {
    font-size: 64px;
    font-weight: 500;
    line-height: 120%;
    margin-bottom: 24px;
    text-align: center;
  }

  h3 {
    color: ${theme.black20};
    font-family: 'Henderson Bold', sans-serif;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 1px;
    line-height: 170%;
    margin-bottom: 16px;
    text-align: center;
    text-transform: uppercase;
  }

  @media screen and (max-width: 900px) {
    max-width: 100%;
    padding: 0 30px;
  }

  @media screen and (max-width: 479px) {
    h2 {
      font-size: 32px;
      padding-top: 25px;
    }
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
    text-align: center;
  }

`

export const ContainerHeader = styled.div`
  display: grid;
  grid-column-gap: 24px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  justify-content: center;
  margin: 0 auto;
  padding-top: 30px;
  width: 100%;

  p {
    font-size: 1rem;
    margin-bottom: 24px;
    padding-bottom: 0;
    padding-top: 25px;

    color: ${theme.grey10};

    line-height: 170%;
  }

  img {
    margin-bottom: 24px;
  }

  @media screen and (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
    padding-top: 0;
  }

  @media screen and (max-width: 900px) {
    grid-template-columns: 1fr;
  }

`
export const SubTitle = styled.h5`
  line-height: 1.2em;
  font-size: 0.75em;
  letter-spacing: 0.15em;
  text-transform: uppercase;
`
