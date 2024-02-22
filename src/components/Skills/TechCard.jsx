import React from 'react';
import styled from 'styled-components';

const TechCard = (props) => {
  const color = "#" + Math.floor(Math.random() * 0xFFFFFF).toString(16);

  return (
    <Container>
      <CardTitle>{props.title}</CardTitle>
      <CardElements>
        {props.elements.map((element, index) => (
          <Element key={index} color={color}>
            {element}
          </Element>
        ))}
      </CardElements>
    </Container>
  );
};

const Container = styled.div`
  background-color: #1c1b23;
  box-shadow:-5px -5px 30px rgba(0,0,0,0.12);
  border: 1px solid ${(props) => props.color};
  border-radius: 10px;
`;

const CardTitle = styled.div`
  font-weight: bold;
  padding: 10px;
  color: inherit;
`;

const CardElements = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: center;
  padding: 2.5rem;
`;

const Element = styled.div`
  background-color: #14131a;
  border-radius: 5px;
  border: 1px solid ${(props) => props.color};
  padding: 5px;
  color: inherit;
`;

export default TechCard;