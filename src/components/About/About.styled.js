import styled from 'styled-components'
import { theme } from '../../theme'

export const Container = styled.div`
  margin: 0 auto;
  max-width: 65%;
  padding: 70px 0;

  h2 {
    margin-bottom: 24px;
    text-align: center;
  }

  h4 {
    color: ${theme.black20};
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
      padding-top: 25px;
    }
  }
`


export const ContainerTitle = styled.div`
  align-self: center;

  h5 {
    text-transform: uppercase;
  }
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
