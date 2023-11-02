import React, { useState } from 'react';
import { NavbarStyles ,ListItem,List,LogoNav, StyledLink,MenuToggle, StyledAcces} from './NavbarStyles'

import { Link } from 'react-router-dom';
const Navbar = () => {
const [menuOpen,setMenuOpen]=useState(false);

const toggleMenu=()=>{
  console.log('Toggle menu clicked');
setMenuOpen(!menuOpen)

}


  return (
  
    <NavbarStyles>
      <LogoNav src={require('../../img/logo/gersa_logo.png')} alt="" />
      <MenuToggle className="menu_toggle" onClick={toggleMenu}>     
      ☰
      </MenuToggle>
      <List menuOpen={menuOpen} className={menuOpen ? 'open' : ''}>
        <ListItem>
          <StyledLink to="/">Inicio</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/nosotros">Nosotros</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/servicios">Servicios</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/faq">FAQ</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to="/cotizacion">Cotización</StyledLink>
        </ListItem>
        <ListItem>
          <StyledAcces to="/acceder" className="acceder">Acceder</StyledAcces>
        </ListItem>
      </List>
    </NavbarStyles>



  ) 
}

export default Navbar