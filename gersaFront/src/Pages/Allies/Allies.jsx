import React from 'react'
import { AlliesContainer, AllyImage } from './AlliesStyled'


const Allies = () => {
  return (
    <AlliesContainer>
   <AllyImage src={require('../../img/ecosend.png')} />
   <AllyImage src={require('../../img/coopetrol.png')}/>
   <AllyImage src={require('../../img/Holcim_logo 1.png')}/>

    </AlliesContainer>
  )
}

export default Allies