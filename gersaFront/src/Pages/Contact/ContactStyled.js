import styled from "styled-components";
 
 export const FormContainer=styled.div`
display:  flex;
flex-wrap: wrap;
width: 1000px;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, lightgreen 100%);
height: 500px;
border: 1px solid black;
justify-content: space-between;
flex-direction: column;
align-items: center;
`
export const ContactContainer=styled.div`

display: flex;
flex-direction: row;
flex-wrap: wrap;
height: 100vh;
width: 100%;
align-items: center;
justify-content: center;

`
export const ContactForm=styled.form`
display: flex;
flex-direction: column;
gap: 40px;

height:80%;
`