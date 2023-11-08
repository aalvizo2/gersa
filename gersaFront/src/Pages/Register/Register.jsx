import React from 'react'
import { Container, DescriptionText, FormAccess, Inputs, Logo, MainSection, RegistroLink, Title } from '../Login/LoginStyled'

const Register = () => {
  return (
    <MainSection>
    <Container>
    
      <Logo src={require('../../img/logo/gersa_logo.png')} alt=""/>
       
       <DescriptionText>Especializada en inventoria, Certificaciones, 
        Inspecciones de equipos de seguridad, seguridad industrial y acesorias en la industria 
        Cementera</DescriptionText>
      
</Container>
<Container>
 <Title> Registrarse</Title>
 <FormAccess method="POST" action=""> 
           
           
           <Inputs type="text" name="" id="" placeholder="Nombre"/><br/>
          
           <Inputs type="text" name="" id="" placeholder="Apellido"/><br/>
        
           <Inputs type="email" name="" id="" placeholder="Correo Electronico"/>
        
           <Inputs type="Perfil" name="" id="" placeholder="Perfil"/>
          
            <Inputs type ="Contrasena" name="" id="" placeholder="Contraseña"/>


           <RegistroLink href="" className="registro">Guardar</RegistroLink>
        </FormAccess>
        

</Container>
</MainSection>

  )
}

export default Register