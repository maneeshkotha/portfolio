import React from 'react'
import TechCard from "./TechCard"
import styled from 'styled-components'






const Skills = () => {
    const skills=[
        {
            skill:"Frontend",
            key:1,
            techs:["HTML","React","Javascript","Bootstrap","Tailwind","Flutter"]
        },
        {
            skill:"Backend",
            key:2,
            techs:["NodeJs","Express Js","Java","Spring","SpringBoot"]
        },
        {
            skill:"Database",
            key:3,
            techs:["MongoDB","MySQL","Oracle","Postgres","Milvus","EdgeDB"]
        },
        {
            skill:"Devops",
            key:4,
            techs:["Jenkins","Docker","Kubernetes","GIT"]
        }
    ]


  return (
    <Container className='SkillsClass'>
       <heading>
       <h2 >Skills</h2>
       </heading>
    
      
        <SkillCards>
        {skills.map(skill=>(
            <TechCard key={skill.key} title={skill.skill} elements={skill.techs}></TechCard>
        ))}
        </SkillCards>
    </Container>
  )
}


const Heading=styled.div`
padding:0 0 0 2.5rem ;
`;
const Container=styled.div`
width: 100%;
margin-top: 20px;
margin-left:40px;
h2{
    color: white;
    font-size: 24px;
    margin-left:80px;
}

`;
const SkillCards=styled.div`
display: grid;
width: 100%;
justify-content: center;
grid-auto-rows: fit-content;
padding: 2.5rem;
@media only screen and (min-width:1024px){
    grid-template-columns: repeat(2,45%);
}
@media only screen and (max-width:1023px){
    grid-template-columns: repeat(2,45%);
}
@media only screen and (max-width:767px){
    grid-template-columns: repeat(1,100%);
}
grid-gap: 20px;
`;

export default Skills
