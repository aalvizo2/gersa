import styled from "styled-components";

export const TeamContainer=styled.div`
height: 100vh;
width: 100vw;
display: flex;
flex-direction: column;
justify-content: center;

`

export const MembersContainers=styled.div`
height: 100%;
width: 100%;
display: flex;
justify-content: center;

gap: 40px;
align-items: center;
`

export const TeamMember=styled.div`
height: 400px;
width: 300px;
background-color: lightgray;
z-index: 1000;

`
export const DecorationLine=styled.line`
display: flex;
height: 150px;
width: 100%;
background-color: orange;
position: absolute;
justify-content: center;
align-items: center;

`
export const Title=styled.h1`
display: flex;
flex-direction: row;


`