import React, { useState } from 'react'
import { ContactContainer, ContactForm, FormContainer } from './ContactStyled'

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
<h1>Contacto</h1>
<ContactForm onSubmit={handleForm}>
<label>
Email:
<input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required/>
</label>
<label>
Telefono:
<input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} required/> 

</label>


<label>
Mensaje:
<textarea value={message} onChange={(e)=>SetMessage(e.target.value)}required/>


</label>

<button type='submit'>Enviar Mensaje</button>




</ContactForm>




</FormContainer>





</ContactContainer>
  );


  };
  

export default Contact