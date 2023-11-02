import styled from "styled-components";
import { Link } from 'react-router-dom';

export const NavbarStyles=styled.nav`
   position: fixed;
   z-index: 1;
   font-family: 'Roboto', sans-serif;
   display: flex;
   width: 100%;
   height: fit-content;
   border-top:0;
   border-left: 0;
   border-right: 0;
   border-bottom: 2px solid #075d07;
   justify-content: space-between;
   background: rgb(255,255,255);
   background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 35%, rgba(102,204,102,1) 100%);



`
export const List=styled.ul`

display: flex; 
@media screen and (max-width: 800px) {

  top: 70px;
        width: 100%;
        display: none;
        position: absolute;
        flex-direction: column;
        background-color: #075d07;
        display: ${(props) => (props.menuOpen ? 'flex' : 'none')};

}

`

export const ListItem=styled.li`

margin-left: 15px;
list-style: none;
padding: 25px;

:hover{
  background-color: #66cc66;
  height: 100%;
}


`
export const LogoNav=styled.img`
    margin-left: 25px;
    width: 5%;
   padding: 5px 5px;

   @media screen and (max-width: 800px) {

    margin-left: 25px;
        width: 20%;

   }



`
export const StyledLink=styled(Link)`

text-decoration: none;
    color: #000;
    transform: rotate3d(10px);

    &:hover{
    
      transform: translateY(-5px);

    }
    @media screen and (max-width: 800px) {
    color: #fff;


    }
`
export const StyledAcces=styled(Link)`
text-decoration: none;
background-color: #fff;
    padding: 10px 20px;
    border-radius: 10px;
    box-shadow: 0 2px #075d07;
`


export const MenuToggle=styled.a`


    padding: 20px;
    color:#075d07;
    font-size: 20px;
    display: none;
    cursor: pointer;
    @media screen and (max-width: 800px) {
        display: block;
        &:hover {
            background-color: #075d07;
            color: #fff;
  
  }
}
`