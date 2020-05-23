import React from 'react';
import styled from 'styled-components/macro';

const ColoredBorder = styled.div`
  align-items: center;
  background: ${props => props.color};
  border-radius: 50%;
  box-shadow: inset 0px -10px 5px 0px rgba(0,0,0,0.2);
  cursor: pointer;
  display: flex;
  justify-content: center;
  height: 16rem;
  width: 16rem;
`;

const InnerCircle = styled.div`
  align-items: center;
  background: #DFDFDF;
  border-radius: 50%;
  box-shadow: inset 0px 10px 5px 0px rgba(168,168,168,1);
  display: flex;
  height: 12rem;
  justify-content: center;
  width: 12rem;
`;

const ShapeImage = styled.img`
  width: 6rem;
`;

function Shape({ shape }) {
  const {
    icon,
    mainColor,
    resultAgainsOponents,
    type,
  } = shape;

  return (
    <ColoredBorder color={mainColor}>
      <InnerCircle>
        <ShapeImage src={icon} alt={type} />
      </InnerCircle>
    </ColoredBorder>
  );
}

export default Shape;
