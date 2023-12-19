import React, { useState } from 'react'
import { ButtonForm, ContactContainer, ContactForm, FormContainer, FormInput, FormLabel, FormTitle, MessageArea } from './ContactStyled'

const Contact = () => {
const[email,setEmail]=useState('');
const[phone,setPhone]=useState('');
const [message,SetMessage]=useState('');


const handleForm=(e)=>{
e.preventDefault();

console.log ('Envio Exitoso:',{email, phone ,message})

};


  return (
<ContactContainer>
<FormContainer>
<FormTitle>Contacto</FormTitle>


<ContactForm onSubmit={handleForm}>
<FormLabel>
Email:
<FormInput type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
</FormLabel>
<FormLabel>
Telefono:
<FormInput type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} required/> 

</FormLabel>


<FormLabel>
Mensaje:
<MessageArea value={message} onChange={(e)=>SetMessage(e.target.value)}required/>


</FormLabel>

<ButtonForm type='submit'>Enviar</ButtonForm>




</ContactForm>




</FormContainer>





</ContactContainer>
  );


  };
  

export default Contact