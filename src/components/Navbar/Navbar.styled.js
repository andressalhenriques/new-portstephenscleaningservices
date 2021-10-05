import styled from 'styled-components'
import { dividerBeige } from '../../assets'

export const NavbarContent = styled.div`
  align-items: center;
  display: grid;

    /* :after{
      background-image: url(${dividerBeige});

    } */

  #menu {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    padding-right: 30px;
  }

  #divider {
    width: 100%;
    background: #F7F9F9;
    margin-top: -3%;
  }

  @media screen and (max-width: 600px) {
    border-bottom: none;

    #menu {
      display: grid;
      width: 100%;
      right: 0;
      top: 100px;
      display: none;
      z-index: 1000;
      grid-template-columns: 1fr;
      padding: 14px 0 0 14px;
      row-gap: 8px;
    }

    img {

   }

    #nav.active {
      border-bottom: none;
      height: calc(100vh - 100px);
    }

    #nav.active #menu {
      display: grid;
      height: calc(100vh - 100px);
      align-content: flex-start;
      visibility: visible;
      overflow-y: auto;
      align-content: center;
      place-items: center;

      grid-column-start: 1;
      grid-column-end: 3;
      grid-row-start: 2;
      grid-row-end: 2;
    }

    #nav.active #hamburger {
      border-top-color: transparent;
    }
  }
`


export const Logo = styled.nav`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-row-start: 1;
  grid-row-end: 1;
  width: 120px;
  text-align: center;

  h3 {
    line-height: 27px;
  }

  h4 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 0.625em;
    padding-bottom: 10px;
  }

`
export const NavContainer = styled.nav`
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  margin: 0;
  padding: 0;
  z-index: 10;
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
      border-bottom: solid 2px #eee2da;
      transform: scaleX(0);
      transition: all 0.5s ease-in-out 0s;
      padding-top: 3px;

    }

  }
  a:hover:after { transform: scaleX(1); }


  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 600px) {
    a {
      font-size: 1em;
    }
  }
`
export const MenuMobile = styled.button`
  display: none;

  @media screen and (max-width: 600px) {
    background: none;
    border: none;
    cursor: pointer;
    display: flex;
    font-size: .7em;
    justify-content: space-evenly;
    align-items: center;

    gap: inherit.5rem;
    padding: .5rem 1rem;

    grid-column-start: 2;
    grid-column-end: 3;
    grid-row-start: 1;
    grid-row-end: 1;
    text-transform: uppercase;

    #hamburger {
      border-top: 2px solid;
      width: 20px;
      display: block;

      :before {
        transform: ${props => props.active ? 'rotate(135deg)':' rotate(0)'};
      }

      :after {
        top: ${props => props.active ? '-7px':' 0'};
        transform: ${props => props.active ? 'rotate(-135deg)':' rotate(0)'};
      }

    :before, :after {
      content: '';
      display: block;
      width: 20px;
      height: 2px;
      background:  currentColor;
      margin-top: 5px;
      transition: .3s;
      position: relative;
    }
  }
  }
`
