import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from '../../Components/images/3.jpg';



export const HomeSection=styled.section`
 background-image: url(${backgroundImage});
background-size:cover;
      background-repeat: no-repeat;
      background-position: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
width: 100%;
height: 100vh;



`
export const DescriptionHome=styled.p`

font-size: 24px;
   
    font-family: 'Roboto', sans-serif;
   
    text-align: center;
   display: flex;



`
export const ContainerHome=styled.div`

width: 50%;
    display: flex;
flex-direction: column;



`
export const TitleHome=styled.h1`
display: flex;
font-size: 30px;
    font-family: 'Roboto', sans-serif;
justify-content: center;
`

export const AboutLink=styled(Link)`

margin-top: 15px;

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