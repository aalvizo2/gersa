import { Link } from "react-router-dom";
import styled from "styled-components";

import backgroundImage2 from '../../Components/images/trabajoenequipo.jpg';


export const HomeSection=styled.section`
 
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
width: 60%;


`
export const ContainerHome=styled.div`
height: 100%;
width: 100%;
    display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y:hidden ;

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
export const CarruselComponents=styled.div`

border-radius: 20px;
  background-color: #ffdead;
  width: 250px;
  height: 480px; 

 display: flex;
 flex-direction: column;
justify-content: center;
  flex-direction: column;
  align-items: center;
  text-align: center;

`
export const ProyectSection=styled.section`
background-image: url(${backgroundImage2});

background-size:cover;
      background-repeat: no-repeat;
      background-position: center;

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
width: 100%;

height:100vh;


`



export const ImgProyect=styled.img`
border-radius: 10px;
width: 100%;
  height: 400px;
display: flex;
margin: 0 auto; 
`
export const DescriptionCarrusel=styled.p`
 height: 80px;
 
      font-weight: bold;
display: flex;
flex-wrap: wrap;


`
export const CarruselContainer=styled.div`


  width: 400px;
  height: 600px;
  text-align: center;
  display: flex;
flex-direction: column;
margin: 0% auto;
`
export const SliderContainer=styled.div`
display: flex;
height: 100%;
width: fit-content;

`
export const SliderContent=styled.div`
display: flex;
height: 100vh;
width: 100%;
flex-direction: column;
justify-content: center;
align-items: center;

`