import styled from 'styled-components'

export const Container = styled.div`
`

export const ContainerContact = styled.div`
  padding: 0 70px;
  grid-template-columns: 1fr 1fr;
  display: grid;
  align-items: center;

  width: 100%;
  max-width: 2000px;
  margin: 0 auto;


  h2 {
    text-align: left;
    width: 100%;
    max-width: 81%;
  }

  h2:after {
    content: '';
    display: block;
    border-bottom: 1px solid #C9AF45;
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
    padding-top: 30px;

    h2 {
      max-width: 100%;
    }
  }


  @media screen and (max-width: 500px) {
    padding: 0 20px;

    img {
      width: 80%;
    }

  }

`
export const ContainerSlider = styled.div`
    background: #F8FAFA;

    img {
      width: 100%;
    }


    #dividerBottom{
      margin-bottom: -1%;

    }

    h3 {
    font-weight: 400;
    letter-spacing: 1.8px;
    line-height: 25.5px;
    text-transform: uppercase;
    text-align: center;
    padding-top: 5%;
  }


`

export const SubTitle = styled.p`
  margin: 30px 0;
  word-wrap: break-word;
  width: 100%;
  max-width: 81%;

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

export const ContainerImage = styled.a`
  text-align: center;
`
