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
      justify-content: space-around;
      align-items: center;
width: 100%;
height: 100vh;


`