import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
}


html, body, #root {
  width: 100%;
  height: 100%;
}

h1, h2, h3, h3, h5 {
  font-family: Yaldevi,sans-serif;
}

p {
  line-height: 27px;
  letter-spacing: 1.3px;
}

body {
  -webkit-font-smoothin: antialiased !important;
  -moz-osx-font-smoothing: grayscale !important;
  margin: 0;

  a, button, input {
    border: 0;
    outline: 0;
    text-decoration: none;
  }

  a {
    color: ${theme.colors.black30};

  }

  ul, li  {
    list-style: none;
  }

  #companyName {
    color: ${theme.colors.green10};
    font-weight: bold;
  }

}

`

export const TitleH1 = styled.h1`
  color: ${theme.colors.black20};
  width: 100%;
  white-space: pre-wrap;
  transition-timing-function: ease;
  transition-duration: 0.9s;
  transition-delay: 0.171429s;
  padding-bottom: 10px;
  font-size: 46px;
  line-height: 120%;

  @media screen and (max-width: 479px) {
    font-size: 38px;
  }
`

export const TitleH2 = styled.h2`
  font-size: 40px;
  line-height: 1.4em;
  font-weight: 300;
  text-align: center;


  @media screen and (max-width: 479px) {
    font-size: 25px;
}
`

export const TitleH3 = styled.h3`
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 1.8px;
  line-height: 25.5px;


  @media screen and (max-width: 479px) {
    font-size: 18px;
}
`

export const TitleH4 = styled.h4`
  font-size: 20px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 170%;


  @media screen and (max-width: 479px) {
    font-size: 15px;
}
`
export const TitleH5 = styled.h5`
  line-height: 1.2em;
  font-size: 0.75em;
  letter-spacing: 0.15em;


  @media screen and (max-width: 479px) {
}
`
