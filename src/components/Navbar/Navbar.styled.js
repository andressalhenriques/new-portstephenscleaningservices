import styled from 'styled-components'

// export const NavbarContent = styled.div`
//   align-items: center;
//   display: grid;
//   z-index: 888;
//     position: relative;

//   #menu {
//     display: grid;
//     grid-template-columns: 1fr 1fr 1fr;

//     justify-content: end;
//     padding-right: 20px;
//     display: grid;
//     grid-template-columns: repeat(3,auto);
//     grid-column-gap: 30px;
//   }

//   @media screen and (max-width: 600px) {
//     border-bottom: none;

//     #menu {
//       /* display: grid; */
//       width: 100%;
//       right: 0;
//       top: 100px;
//       display: block;
//       z-index: 1000;
//       /* grid-template-columns: 1fr; */
//       padding: 14px 0 0 14px;
//       /* row-gap: 8px; */
//       height: 0;
//       transition: .6s;
//       visibility: hidden;
//       overflow-y: hidden;
//     }


//     #nav.active {
//       border-bottom: none;
//       height: calc(100vh - 100px);
//       visibility: visible;
//     }

//     #nav.hidden #menu {
//       visibility: hidden;
//       /* display: none; */
//     }

//     #nav.hidden {
//       /* height: 50px; */
//     }

//     #nav.active #menu {
//       /* display: grid; */
//       height: calc(100vh - 100px);
//       align-content: flex-start;
//       visibility: visible;
//       overflow-y: auto;
//       align-content: center;
//       place-items: center;

//       grid-column-start: 1;
//       grid-column-end: 3;
//       grid-row-start: 2;
//       grid-row-end: 2;
//     }

//     #nav.active #hamburger {
//       border-top-color: transparent;
//     }
//   }

// `


// export const Logo = styled.nav`
//   grid-column-start: 1;
//   grid-column-end: 2;
//   grid-row-start: 1;
//   grid-row-end: 1;
//   text-align: start;

//   h3 {
//     line-height: 27px;
//   }

//   h4 {
//     text-transform: uppercase;
//     font-weight: 400;
//     font-size: 0.625em;
//     padding-bottom: 10px;
//   }

// `
// export const NavContainer = styled.nav`
//   display: grid;
//   grid-template-columns: 1fr 1fr 1fr;
//   padding: 0 10px;

//   align-items: center;
//   margin: 0;
//   padding: 0;
//   z-index: 10;

//   #companyTitle {
//     text-align: center;
//   }

//   h3, h4 {
//     font-family: 'Poiret One', cursive;
//     text-transform: uppercase;
//     letter-spacing: 1.4px;
//     line-height: 36px;
//     font-size: 24px;
//   }


//   a {
//     font-weight: 500;
//     font-size: 0.75em;
//     text-transform: uppercase;
//     text-decoration: none;
//     letter-spacing: 2px;
//     width: fit-content;

//     :after {
//       display:block;
//       content: '';
//       border-bottom: solid 2px #eee2da;
//       transform: scaleX(0);
//       transition: all 0.5s ease-in-out 0s;
//       padding-top: 3px;

//     }

//   }
//   a:hover:after {
//     transform: scaleX(1);
//    }


//   @media screen and (max-width: 1000px) {
//     grid-template-columns: 1fr 1fr;
//     #companyTitle {
//       display: none;
//     }
//   }

  // @media screen and (max-width: 479px) {
  //   a {
  //     font-size: 1em;
  //   }


  // }
// `
// export const MenuMobile = styled.button`
//   display: none;

//   @media screen and (max-width: 600px) {
//     background: none;
//     border: none;
//     cursor: pointer;
//     display: flex;
//     font-size: .7em;
//     justify-content: space-evenly;
//     align-items: center;

//     gap: inherit.5rem;
//     padding: .5rem 1rem;

//     grid-column-start: 2;
//     grid-column-end: 3;
//     grid-row-start: 1;
//     grid-row-end: 1;
//     text-transform: uppercase;

//     #hamburger {
//       border-top: 2px solid;
//       width: 20px;
//       display: block;

//       :before {
//         transform: ${props => props.active ? 'rotate(135deg)':' rotate(0)'};
//       }

//       :after {
//         top: ${props => props.active ? '-7px':' 0'};
//         transform: ${props => props.active ? 'rotate(-135deg)':' rotate(0)'};
//       }

//     :before, :after {
//       content: '';
//       display: block;
//       width: 20px;
//       height: 2px;
//       background:  currentColor;
//       margin-top: 5px;
//       transition: .3s;
//       position: relative;
//     }
//   }
//   }
// `



export const NavbarContent = styled.div`
  #logo {
    font-size: 1.5rem;
    font-weight: bold;
  }

  #header {
    box-sizing: border-box;
    height: 110px;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
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
      border-bottom: solid 2px #eee2da;
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

  #menu {
    display: grid;
    place-content: center;
    position: absolute;
    width: 100%;
    top: 110px;
    right: 0px;
    background: #fff;
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
