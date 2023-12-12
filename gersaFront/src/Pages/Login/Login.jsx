import React ,{useState}from 'react'
import { Container, DescriptionText, FormAccess, MainSection, Logo,Inputs, RegistroLink, Title } from './LoginStyled'


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3308/acceder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        console.log('Login successful!');
      } else {
        console.error('Login error');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };


  return (
    <MainSection>
      
      <Container>
      <Logo src={require('../../img/logo/gersa_logo.png')} alt=""/>
       
       <DescriptionText>Especializada en inventoria, Certificaciones, 
        Inspecciones de equipos de seguridad, seguridad industrial y
         acesorias en la industria Cementera</DescriptionText>
      </Container>
      <Container>
        <Title>Acceder:</Title>
        
        <FormAccess method="POST" onSubmit={handleLogin}> 
           <Inputs 
           type="text" name="" id="" 
           placeholder="Usuario:"value={username} 
           onChange={(e)=>setUsername(e.target.value)}/><br/>
           
           
           <Inputs type="password" name="password" id="" 
           value={password}
            onChange={(e)=>setPassword(e.target.value)}
           
           placeholder="Contraseña:"/>
           <Inputs type="submit" value="Inicia Sesión"/><br/>
           <RegistroLink to="Register" className="registro">Crea una Cuenta</RegistroLink>
        </FormAccess>
        
      </Container>
    </MainSection>

  )
  };

export default Login