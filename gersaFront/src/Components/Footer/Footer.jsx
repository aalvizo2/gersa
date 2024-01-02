import React from 'react'
import { FooterContainer, FooterList, ListContainer, LogoImg, SocialNet } from './FooterStyled'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
const Footer = () => {
  return (
    <FooterContainer>

    <LogoImg src={require('../../img/GersaFooter.png')} />
    <p>Gersa Ingenieria</p>
    
    <SocialNet>
    <FaFacebook  cursor={PointerEvent}/>
    <FaInstagram />
    <TfiYoutube />
    
    </SocialNet>
  <ListContainer>
<FooterList>
<li>Avisos Legales</li>
<li>Politica de Privacidad</li>
<li>Condiciones de Servicio</li>

</FooterList>



  </ListContainer>




    </FooterContainer>
  )
}

export default Footer