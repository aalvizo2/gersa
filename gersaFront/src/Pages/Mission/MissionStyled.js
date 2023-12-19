import styled from "styled-components";

export const MissionContainer=styled.section`
display: flex;

flex-wrap: wrap;
height: 100vh;
width: 100%;
align-items: center;
@media screen and (max-width: 1000px) {
flex-direction: column;
width: 100%;
height: 100%;
}
`
export const Container1=styled.div`
display: flex;
flex-direction: column;
align-items: center;

justify-content: space-around;
flex-wrap: wrap;
width: 50%;
height: 90%;
@media screen and (max-width: 1000px) {
    width: 100%;
height: 100%;
padding: 10px;
}
`
export const Container2=styled.div`
display: flex;
flex-direction: column;
align-items: center;

justify-content: space-around;
flex-wrap: wrap;
width: 50%;
height: 90%;
@media screen and (max-width: 1000px) {
    width: 100%;
height: 100%;
padding: 10px;
}

`

export const MissionText=styled.p`
@media screen and (max-width: 1000px) {
    max-width: 90%;

}


`
export const TitleM=styled.div`


`
export const TextContainer=styled.div`

width: 50%;
@media screen and (max-width: 1000px) {
width: 100%
}

`
