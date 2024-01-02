import styled from "styled-components";


export const FooterContainer=styled.section`
display: flex;
height: 200px;
width: 100%;
background-color: #66CC66E5;
flex-direction: column;
justify-content: center;
align-items: center;
flex-wrap: wrap;
@media screen and (max-width: 1000px) {
  height: 300px;
}
`

export const LogoImg=styled.img`
height: 50px;
width: 80px;
`
export const SocialNet=styled.div`
width: 100%;
height: 50px;
display: flex;
justify-content: center;
gap: 100px;
font-size: 30px;
flex-wrap: wrap;
svg {
    cursor: pointer;  
  }
  @media screen and (max-width: 1000px) {
gap: 40px;
}

`

export const ListContainer=styled.div`
display: flex;
width: 100%;
justify-content: center;
height: 40px;
flex-wrap: wrap;
`
export const FooterList=styled.ul`
display: flex;
flex-direction: row;
width: 100%;
list-style: none;
justify-content: center;
gap :100px;
flex-wrap: wrap;
@media screen and (max-width: 1000px) {
  align-items: center;
  justify-content: center;
gap: 20px;
height: 100%;
}
li{
cursor: pointer;

}
`