import React from 'react'
import styled from 'styled-components'

const SkillsCard = (props) => {
  return (
    <Container>
        <Image src={props.image}></Image>
        <Title>
            {props.title}
        </Title>
    </Container>
  )
}
const Container=styled.div`
width: 100%;
display: flex;
flex-direction: column;
`;
const Image=styled.img`
display: flex;
flex: 1;
width: 100%;
object-fit: contain;
border-radius: 10px;
height: 100%;
`;

const Title=styled.div`
display: flex;
justify-content: center;
`;
export default SkillsCard