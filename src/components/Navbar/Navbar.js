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
    { page: 'career', subtitle: 'Career' },
    { page: 'contact', subtitle: 'Contact' }
  ]


  const toggleMenu = (event) => {
    setMenuOpen(!menuOpen)
    if (event.type === 'touchstart') event.preventDefault()
    const nav = document.getElementById('nav')
    nav.classList.toggle('active')
  }
  ROUTES.map((route) => ( console.log(route.page)))
  return (
      <NavbarContent>
          <NavContainer  id="nav">
            <Logo>
              <img src={logo} alt="Nav Logo" id="logo"/>
              <h3>Port Stephens</h3>
              <h4>Cleaning Services</h4>
            </Logo>
            <MenuMobile id="menu-mobile" active={menuOpen} onClick={toggleMenu} >
              Menu
              <span id="hamburger"></span>
            </MenuMobile>
            <div id="menu">
              {ROUTES.map((route) => (
                <NavLink
                  key={route.page}
                  to={`/${route.page}`}
                  activeStyle={{
                    color: theme.colors.blue40,
                    fontWeight: 'bold',
                    borderBottom: '3px solid ' + theme.colors.blue40
                  }}>
                  {route.subtitle}
                </NavLink>
              ))}
            </div>
        </NavContainer>
        <img src={dividerBeige} alt="Nav Logo" id="divider"/>
      </NavbarContent>
 )
}
