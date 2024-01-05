import React, { useState } from 'react'
import { Container1, Container2 } from '../Mission/MissionStyled'
import { MainContainer, Question, QuestionContainer, QuestionContainer1, QuestionContainer2, SectionTitle } from './Ask'

const FrequentAsk = () => {
const questionsPerPage=5;
const totalQuestion=10;
const TotalPages=Math.ceil(totalQuestion/questionsPerPage);

const[currentPage,setCurrentPage]=useState(1);

const renderQuestions = () => {
  const startIndex = (currentPage - 1) * questionsPerPage;
  const endIndex = Math.min(startIndex + questionsPerPage, totalQuestion);

  return Array.from({ length: endIndex - startIndex }, (_, index) => (
    <Question key={startIndex + index}>{`Question ${startIndex + index + 1}`}</Question>
  ));
};

const handlePageChange=(newPage)=>{

setCurrentPage(newPage);

}






  return (
    <QuestionContainer>
      
      <SectionTitle>
    <h1>PREGUNTAS FRECUENTES</h1>
    </SectionTitle>

  <MainContainer>
  <QuestionContainer1>{renderQuestions()}</QuestionContainer1>

</MainContainer>
<div>
        <p>Página {currentPage} de {TotalPages}</p>
        <button disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Anterior
        </button>
        <button disabled={currentPage === TotalPages} onClick={() => handlePageChange(currentPage + 1)}>
          Siguiente
        </button>
      </div>

</QuestionContainer>

  )
}

export default FrequentAsk