import styled from "styled-components";

export const Question=styled.div`
background-color: lightgray;
width: 516px;
height: 97px;

@media screen and (max-width: 900px) {
    width: 80%;
 
}
`
export const  QuestionContainer=styled.div`
display: flex;

flex-wrap: wrap;
height: fit-content;
width: 100%;
align-items: center;
justify-content: center;


`
export const TitleQ=styled.h1`

font-size: 30px;
    font-family: 'Roboto', sans-serif;
display: flex;
margin-left: 0%;
`

export const SectionTitle=styled.div`
display: flex;
width: 100%;
justify-content: center;
align-items: center;
height: 300px;

`

export const MainContainer=styled.div`
display: flex;
width: 100%;
height: fit-content;
flex-direction: row;
justify-content: center;

align-items: center;
@media screen and (max-width: 1000px) {
flex-direction: column;
gap: 20px;

}

`
export const QuestionContainer1=styled.div`

display: flex;
flex-direction: column;
align-items: center;
gap: 20px;
justify-content: space-around;
flex-wrap: wrap;
width: 50%;
height: 90%;
@media screen and (max-width: 1000px) {
    width: 100%;
height: 100%;
gap: 20px;
}





`
export const QuestionContainer2=styled.div`

display: flex;
flex-direction: column;
align-items: center;

justify-content: space-around;
flex-wrap: wrap;
width: 50%;
gap: 20px;
height: 100%;
@media screen and (max-width: 1000px) {
    width: 100%;
height: 100%;

gap: 20px;
}





`