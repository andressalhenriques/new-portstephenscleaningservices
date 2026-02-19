import styled from 'styled-components'
import { theme } from '../../theme'

export const NavbarContent = styled.div`
 

  #companyTitle {
    text-align: center;

    a:after {
      border-bottom: none
    }
  }

  h3 {
    text-transform: uppercase;
    font-family: Cinzel,sans-serif;
    font-size: 26px;
    letter-spacing: 2px;
    line-height: 44px;
  }

  #logo {

    #img-logo {
      font-size: 1.5rem;
      font-weight: bold;
    }

    a:after {
      border-bottom: none
    }
  }

  h4 {
    text-transform: uppercase;
    font-family: Cinzel,sans-serif;
    font-weight: 400;
    letter-spacing: 2px;
  }

  #header {
    box-sizing: border-box;
    height: 110px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: ${theme.colors.white100};
    z-index: 99;
    position: relative;
  }

  #menu {
    display: flex;
    list-style: none;
    gap: 0.5rem;
  }

  #menu a {
    display: block;
    padding: 0.5rem;
  }

  #btn-mobile {
    display: none;
  }

  a {
    font-weight: 500;
    font-size: 0.75em;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 2px;
    width: fit-content;

    :after {
      display:block;
      content: '';
      border-bottom: solid 2px ${theme.colors.white40};
      transform: scaleX(0);
      transition: all 0.5s ease-in-out 0s;
      padding-top: 3px;
    }
  }

  a:hover:after {
     transform: scaleX(1);
   }


@media (max-width: 479px) {
  a {
    font-size: 1em;
  }

  h3, h4 {
    display: none;
  }

  #menu {
    display: grid;
    place-content: center;
    position: absolute;
    width: 100%;
    top: 110px;
    right: 0px;
    background: ${theme.colors.white100};
    transition: 0.6s;
    z-index: 1000;
    height: 0px;
    visibility: hidden;
    overflow-y: hidden;
  }
  #nav.active #menu {
    height: calc(100vh - 100px);
    visibility: visible;
    overflow-y: auto;
  }
  #menu a {
    padding: 1rem 0;
    margin: 0 auto;
  }
  #btn-mobile {
    display: flex;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    border: none;
    background: none;
    cursor: pointer;
    gap: 0.5rem;
  }
  #hamburger {
    border-top: 2px solid;
    width: 20px;
  }
  #hamburger::after,
  #hamburger::before {
    content: '';
    display: block;
    width: 20px;
    height: 2px;
    background: currentColor;
    margin-top: 5px;
    transition: 0.3s;
    position: relative;
  }
  #nav.active #hamburger {
    border-top-color: transparent;
  }
  #nav.active #hamburger::before {
    transform: rotate(135deg);
  }
  #nav.active #hamburger::after {
    transform: rotate(-135deg);
    top: -7px;
  }
}
`

export const Logo = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  text-align: start;

`
