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


`

export const ListItem=styled.li`

margin-left: 15px;
list-style: none;
padding: 25px;


`
export const LogoNav=styled.img`
    margin-left: 25px;
    width: 6%;
    height: auto;
    padding: 5px 5px;

`
export const StyledLink=styled(Link)`

text-decoration: none;
    color: #000;
    transform: rotate3d(10px);

    &:hover{

      transform: translateY(-5px);

    }

`
export const MenuToggle=styled()`
    display: none;
`