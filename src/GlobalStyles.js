import styled, { createGlobalStyle } from 'styled-components'
import { theme } from './theme'

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Raleway', sans-serif;
  font-size: 1em;
}

html, body, #root {
  width: 100%;
  height: 100%;
}

h1 {
  font-size: 32px;
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
    color: black;
  }

  ul, li  {
    list-style: none;
  }

  @media screen and (max-width: 500px) {
    h1 {
      font-size: 15px;
    }

    h2 {
      font-size: 10px;
    }
  }
}

`

export const TitleH1 = styled.h1`
  font-family: 'Cinzel', serif;
  width: 100%;
  white-space: pre-wrap;
  transition-timing-function: ease;
  transition-duration: 0.9s;
  transition-delay: 0.171429s;
  padding-bottom: 10px;
  font-size: 2em;
  font-weight: 300;

  :after {
    content: '';
    display: block;
    border-bottom: 1px solid ${theme.colors.gold10};
    width: 100%;
    max-width: 60px;
    height: 2px;
    margin-top: 8px;
  }

`

export const TitleH2 = styled.h2`
  font-family: 'Cinzel', serif;
  font-size:1.7em;
  line-height: 1.2em;
  font-weight: 300;
  text-align: center;


  @media screen and (max-width: 500px) {
    font-size: 1.5em;
}
`
