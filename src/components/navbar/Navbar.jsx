
import React from 'react'
import { Hamburger, Logo, Nav, Menu, MenuLink } from './NavbarStyles';
import { useState } from 'react';
//import {GiHamburgerMenu} from "react-icons/gi"



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo  to="/home" >
        <i>{"<yummy>"}</i>
        <span>recipes</span>
      </Logo>
      <Hamburger onClick={()=>setIsOpen(!isOpen)}>
        <span/>
        <span/>
        <span/>
        {/* <GiHamburgerMenu/> */}
      </Hamburger>
      <Menu osman={isOpen}>
        <MenuLink onClick={()=>setIsOpen(!isOpen)}
        onMouseUp={()=>sessionStorage.clear()}
         to="/about">About</MenuLink>
        <MenuLink to="/github">Github</MenuLink>
        <MenuLink onClick={()=>setIsOpen(!isOpen)} to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  )
}

export default Navbar

/* BsEmojiSunglasses */