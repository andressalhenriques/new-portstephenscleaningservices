import styled from 'styled-components'

export const Container = styled.div`
  .awssld__content {
    background-color: transparent;
  }

  .awssld__bullets {
    display: none;
  }

  .awssld__wrapper {
    max-height: 450px;
  }

  .awssld {
    max-height: 450px;
  }

  h3 {
    font-size: 1.5em;
    font-weight: 300;
  }

  @media screen and (max-width: 900px) {
  .awssld__container {
    padding-bottom: 32%;
  }
}

`
export const Slider = styled.div`
  max-width: 845px;
  margin: 10px auto 25px;
  text-align: center;

  p {
    font-size: 1.3em;
    font-weight: 300;
    letter-spacing: 4px;
    line-height: 30px;
  }

  @media screen and (max-width: 900px) {

    p {
      padding: 0 60px;
      font-size: 1em;
    }
  }

  h5 {
    padding-top: 5%;
    font-size: 0.75em;
    font-weight: 300;
    letter-spacing: 1.8px;
    line-height: 25.5px;
    text-transform: uppercase;
  }

  `
