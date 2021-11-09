import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { logo, dividerBeige } from '../../assets'
import {
  Logo,
  MenuMobile,
  NavbarContent,
  NavContainer,
} from  './Navbar.styled'
import { theme } from '../../theme'

export function Navbar () {
  const [menuOpen, setMenuOpen] = useState(false)

  const ROUTES = [
    { page: 'home', subtitle: 'Home' },
    { page: 'career', subtitle: 'Become a cleaner' },
    { page: 'contact', subtitle: 'Contact' }
  ]


  const toggleMenu = (event) => {
    // console.log({event})
    // setMenuOpen(!menuOpen)
    // if (event.type === 'touchstart') event.preventDefault()
    // const nav = document.getElementById('nav')
    // nav.classList.toggle('active')

    if (event.type === 'touchstart') event.preventDefault();
      const nav = document.getElementById('nav');
      nav.classList.toggle('active');
      const active = nav.classList.contains('active');
      event.currentTarget.setAttribute('aria-expanded', active);
      if (active) {
        event.currentTarget.setAttribute('aria-label', 'Fechar Menu');
      } else {
        event.currentTarget.setAttribute('aria-label', 'Abrir Menu');
      }
  }

  const test = () => {
    console.log('test')

    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }

  return (
      <NavbarContent>
          {/* <NavContainer  id="nav">
            <Logo>
              {console.log({menuOpen})}
              <img src={logo} alt="Nav Logo" id="logo"/>
            </Logo>
            <MenuMobile id="menu-mobile" active={menuOpen} onClick={toggleMenu} >
              Menu
              <span id="hamburger"></span>
            </MenuMobile>
            <div id="companyTitle">
              <h3>Port Stephens</h3>
              <h4>Cleaning Services</h4>
            </div>
            <div id="menu">
              {ROUTES.map((route) => (
                <NavLink
                  key={route.page}
                  to={`/${route.page}`}
                  onClick={test}
                  activeStyle={{
                    color: theme.colors.blue40,
                    fontWeight: 'bold',
                    borderBottom: '3px solid ' + theme.colors.blue40
                  }}>
                  {route.subtitle}
                </NavLink>
              ))}
            </div>
        </NavContainer> */}
        <header id="header">
        <Logo>
          {console.log({menuOpen})}
          <img src={logo} alt="Nav Logo" id="logo"/>
        </Logo>
          <nav id="nav">
            <button aria-label="Abrir Menu" id="btn-mobile"  onClick={toggleMenu} aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
              <span id="hamburger"></span>
            </button>
            <ul id="menu" role="menu">
            {ROUTES.map((route) => (
                <NavLink
                  key={route.page}
                  to={`/${route.page}`}
                  onClick={test}
                  activeStyle={{
                    color: theme.colors.blue40,
                    fontWeight: 'bold',
                    borderBottom: '3px solid ' + theme.colors.blue40
                  }}>
                  {route.subtitle}
                </NavLink>
              ))}
              {/* <li><a href="/">Sobre</a></li>
              <li><a href="/">Produtos</a></li>
              <li><a href="/">Portfólio</a></li>
              <li><a href="/">Contato</a></li> */}
            </ul>
          </nav>
        </header>
        {/* <img src={dividerBeige} alt="Nav Logo" id="divider"/> */}
      </NavbarContent>
 )
}
