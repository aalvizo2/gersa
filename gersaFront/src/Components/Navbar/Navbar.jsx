import React from 'react'
import { NavbarStyles ,ListItem,List,LogoNav, StyledLink} from './NavbarStyles'

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
  
    <NavbarStyles>
      <LogoNav src={require('../../img/logo/gersa_logo.png')} alt="" />
      <a className="menu_toggle">☰</a>
      <List>
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
          <StyledLink to="/acceder" className="acceder">Acceder</StyledLink>
        </ListItem>
      </List>
    </NavbarStyles>



  ) 
}

export default Navbar