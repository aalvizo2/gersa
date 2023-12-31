import React from 'react'

import { DecorContainer, DecorationLine, DoubleDecorationLine, ImgContainer, MemberPicture, MembersContainers, TeamContainer, TeamMember, Title, TitleContainer } from './TeamStyled'

const KnonwTheTeam = () => {
  return (
    <TeamContainer>
    
    <TitleContainer>
    <Title>
    
    Conoce al equipo  
  </Title>
  </TitleContainer>
       <MembersContainers>
    
         <TeamMember>
           <ImgContainer>
         <MemberPicture src={require('../../img/PersonPicture.jpg')} />
           </ImgContainer>



        </TeamMember>



        <TeamMember>


        </TeamMember>



<DecorContainer>
<DecorationLine/>
<DoubleDecorationLine/>


</DecorContainer>




        <TeamMember>

        </TeamMember>
        
        
        
        </MembersContainers>      




</TeamContainer>
  )
}

export default KnonwTheTeam