import styled from "styled-components";
 
 export const FormContainer=styled.div`
display:  flex;
flex-wrap: wrap;
width: 700px;
background: rgb(255,255,255);
background: linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 0%, lightgreen 100%);
height: 500px;
border: 1px solid black;
align-items: center;
justify-content: center;
flex-direction: column;
@media screen and (max-width: 1000px) {
width: 500px;
}
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
gap: 20px;
justify-content: center;
align-items: center;
height:80%;
flex-wrap: wrap;
`
export const FormLabel=styled.label`
display: flex;
flex-direction: column;
flex-wrap: wrap;
width: 100%;
color: green;
font-size: 20px;

@media screen and (max-width: 1000px) {
gap: 0;
}
`
export const FormInput=styled.input`
display: flex;
width: 500px;
flex-wrap: wrap;

background-color: transparent;
border: 1px solid green;
justify-items: center;
align-items: center;
@media screen and (max-width: 1000px) {
width: 100%;
}
`
export const MessageArea=styled.textarea`
height: 150px;
width: 500px;
background-color: transparent;
border: 1px solid green;

display: flex;
flex-wrap: wrap;
@media screen and (max-width: 1000px) {
width: 100%;

}

`
export const FormTitle=styled.h1`
color: green;



`
export const ButtonForm=styled.button`
display: flex;
height: 50px;
font-size: 20px;
width: 100px;
border: none;
background-color: lightgrey;
cursor: pointer;
flex-wrap: wrap;
justify-content: center;
align-items: center;
`
