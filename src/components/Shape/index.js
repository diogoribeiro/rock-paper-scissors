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
  height: 80%;
  justify-content: center;
  width: 80%;
`;

const ShapeImage = styled.img`
  width: 50%;
`;

function Shape({ className, shape, onClick }) {
  const {
    icon,
    mainColor,
    resultAgainsOponents,
    type,
  } = shape;

  return (
    <ColoredBorder className={className} color={mainColor} onClick={() => onClick(shape)}>
      <InnerCircle>
        <ShapeImage src={icon} alt={type} />
      </InnerCircle>
    </ColoredBorder>
  );
}

export default Shape;
