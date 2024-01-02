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
@media screen and (max-width: 1000px) {
  flex-direction: column;
}
`

export const TeamMember=styled.div`
height: 400px;
width: 300px;
background-color: lightgray;
z-index: 1000;
justify-content: center;

display: flex;
`
export const DecorationLine=styled.div`
display: flex;
height: 10px;
width: 100%;
background-color: orange;
position: absolute;
justify-content: center;
align-items: center;
@media screen and (max-width: 1000px) {
    width: 10px;
    height: 100%;
  }
`
export const Title=styled.h1`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;

`
export const TitleContainer=styled.div`
display: flex;
width: 100%;
justify-content: center;
height: 50%;

`
export const DecorContainer=styled.div`

display: flex;
height: 40%;
width: 100%;
position: absolute;

align-items: center;
@media screen and (max-width: 1000px) {
flex-direction: column;
  }
`
export const DoubleDecorationLine = styled.div`
  display: flex;
  height: 10px;
  width: 100%;
  background-color: orange;
  position: absolute;
  justify-content: space-between;
  align-items: center;
  top: 55%;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    height: 100%;
    width: 10px; 
    justify-content: center;
    align-content: space-around;
  }
`;

export const ImgContainer=styled.div`
display: flex;
width: 80%;
height: 50%;
border-radius: 50%;
  overflow: hidden; 
padding :4px ;

`
export const MemberPicture=styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover; 

`