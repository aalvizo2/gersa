import React from 'react'
import { Container, DescriptionText, FormAccess, LoginSection, Logo,Inputs, RegistroLink, Title } from './LoginStyled'

const Login = () => {
  return (
    <LoginSection>
      
      <Container>
      <Logo src={require('../../img/logo/gersa_logo.png')} alt=""/>
       
       <DescriptionText>Especializada en inventoria, Certificaciones, Inspecciones de equipos de seguridad, seguridad industrial y acesorias en la industria Cementera</DescriptionText>
      </Container>
      <Container>
        <Title>Acceder:</Title>
        
        <FormAccess method="POST" action=""> 
           <Inputs type="text" name="" id="" placeholder="Usuario:"/><br/>
           <Inputs type="password" name="" id="" placeholder="Contraseña:"/>
           <Inputs type="submit" value="Inicia Sesión"/><br/>
           <RegistroLink href="" className="registro">Crea una Cuenta</RegistroLink>
        </FormAccess>
        
      </Container>
    </LoginSection>

  )
}

export default Login