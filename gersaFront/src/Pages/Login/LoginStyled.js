import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainSection=styled.section`
width: 100%;
display: flex;
color:#000;
height: 100vh;

@media screen and (max-width: 800px) {

flex-direction: column;
flex-wrap: wrap;

}

`

export const Container=styled.div`
padding: 160px;
    width: 50%;
    display: flex;
flex-direction: column;
@media screen and (max-width: 800px) {
display: flex;
justify-content: center;
align-items: center;
padding: 80px;
}

`
export const Logo=styled.img`

width: 80%;
    float: center;
    padding-left: 35px;
    opacity: 0.6;
    

`
export const DescriptionText=styled.p`
    font-size: 24px;
    padding-top: 35px;
    font-family: 'Roboto', sans-serif;
    padding-right: 5px;
    text-align: center;
   display: flex;
`
export const FormAccess=styled.form`
justify-content: center;
align-items: center;
display: flex;
flex-direction: column;
align-content: center;
`
export const Inputs=styled.input`
justify-content: center;
align-items: center;
margin-left: 30%;
    width: 340px;
    margin-top: 25px;
    padding: 5px 15px;
    border-top: none;
    border-right: none;
    border-left: none;
    border-bottom: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    box-shadow: 0 2px #075d07;
display: flex;
flex-wrap: wrap;
 &[type="submit"] {
    width: auto;
    background-color: #000;
    box-shadow: none;
    color:#fff;
    border-radius: 5px;
    margin-left: 50%;
    
}
@media screen and (max-width: 800px) {
display: flex;
margin-left:0%;
width: 200px;
justify-content: center;
align-items: center;
}




`
export const RegistroLink = styled(Link)`

margin-top: 15px;
    margin-left: 48%;
    background-color: #66cc66;
    width: fit-content;
    padding: 5px 15px; 
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    border-radius: 5px;
    color:#fff;
display: flex;




`

export const Title=styled.h1`

font-size: 30px;
    font-family: 'Roboto', sans-serif;
    margin-left: 50%;


`
