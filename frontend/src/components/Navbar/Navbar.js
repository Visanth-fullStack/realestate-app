import React, { useEffect, useState } from 'react'
import { IconButton, IconGroup, Logo, LogoIcon, MenuItem, MenuItems, MenuLink, NavbarContainer } from './Navbar.styled'
import { FaUser } from 'react-icons/fa'
import { BsFillBuildingsFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
const navigate = useNavigate()
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
  return (
    <NavbarContainer isFixed={isFixed}>
      <Logo>
        <LogoIcon><BsFillBuildingsFill color='#ff5a3d' size={20}/></LogoIcon>
        RealEstate
      </Logo>
      
      <MenuItems>
        <MenuItem><MenuLink href="/">Home</MenuLink></MenuItem>
        <MenuItem><MenuLink href="/about">About</MenuLink></MenuItem>
        <MenuItem><MenuLink href="/property">Property</MenuLink></MenuItem>
        <MenuItem><MenuLink href="/blog">Agents</MenuLink></MenuItem>
        <MenuItem><MenuLink href="/contact">Contact</MenuLink></MenuItem>
      </MenuItems>
      
      <IconGroup>
        <IconButton onClick={() =>navigate('/properties')}><FaUser /></IconButton>
      </IconGroup>
    </NavbarContainer>
  )
}

export default Navbar