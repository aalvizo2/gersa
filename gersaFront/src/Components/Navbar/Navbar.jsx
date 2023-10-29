import React from 'react'
import { NavbarStyles } from './NavbarStyles'

const Navbar = () => {
  return (
  
    <NavbarStyles>
    <img src="../../img/logo/gersa_logo.png" alt=""/>
    <a class="menu_toggle">☰</a>
    <ul>
      <li><a href="">Inicio</a></li>
      <li><a href="">Nosotros</a></li>
      <li><a href="">Servicios</a></li>
      <li><a href="">FAQ</a></li>
      <li><a href="">Cotización</a></li>
      <li><a href="" class="acceder">Acceder</a></li>
    </ul>
  </NavbarStyles>


  )
}

export default Navbar