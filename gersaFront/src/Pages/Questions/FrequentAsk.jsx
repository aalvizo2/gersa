import React from 'react'
import { Container1, Container2 } from '../Mission/MissionStyled'
import { MainContainer, Question, QuestionContainer, QuestionContainer1, QuestionContainer2, SectionTitle } from './Ask'

const FrequentAsk = () => {
  return (
    <QuestionContainer>
      
      <SectionTitle>
    <h1>PREGUNTAS FRECUENTES</h1>
    </SectionTitle>

  <MainContainer>
<QuestionContainer1>

<Question></Question>
<Question></Question>
<Question></Question>
<Question></Question>
<Question></Question>

</QuestionContainer1>
<QuestionContainer2>

<Question></Question>
<Question></Question>
<Question></Question>
<Question></Question>
<Question></Question>


</QuestionContainer2>

</MainContainer>

</QuestionContainer>

  )
}

export default FrequentAsk