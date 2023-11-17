import { Link } from "react-router-dom";
import styled from "styled-components";
import backgroundImage from '../../Components/images/trabajoenequipo.jpg';


export const ProyectSection=styled.section`
background-image: url(${backgroundImage});

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