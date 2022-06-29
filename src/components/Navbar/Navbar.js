import React from 'react'
import { NavLink } from 'react-router-dom'

import { logo } from '../../assets'
import {
  Logo,
  NavbarContent,
} from  './Navbar.styled'
import { theme } from '../../theme'

export function Navbar () {
  const ROUTES = [
    { page: 'home', subtitle: 'Home' },
    { page: 'career', subtitle: 'Become a cleaner' },
  ]


  const toggleMenu = (event) => {
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


  return (
    <NavbarContent>
      <header id="header">
      <Logo id="logo">
        <NavLink
          key="home"
          to={`/home`}>
         <img src={logo} alt="Nav Logo" id="img-logo"/>
        </NavLink>
      </Logo>
      <div id="companyTitle">
        <NavLink
          key="home"
          to={`/home`}>
            <h3>Port Stephens</h3>
            <h4>Cleaning Services</h4>
        </NavLink>
      </div>
        <nav id="nav">
          <button aria-label="Abrir Menu" id="btn-mobile"  onClick={toggleMenu} aria-haspopup="true" aria-controls="menu" aria-expanded="false">Menu
            <span id="hamburger"></span>
          </button>
          <ul id="menu" role="menu">
          {ROUTES.map((route) => (
              <NavLink
                key={route.page}
                to={`/${route.page}`}
                onClick={toggleMenu}
                activeStyle={{
                  color: theme.colors.blue40,
                  fontWeight: 'bold',
                  borderBottom: '3px solid ' + theme.colors.blue40
                }}>
                {route.subtitle}
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
    </NavbarContent>
 )
}
