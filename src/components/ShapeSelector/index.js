import React from 'react';
import styled from 'styled-components/macro';

import Shape from 'components/Shape';

import {
  PAPER,
  SCISSORS,
  ROCK,
} from 'utils/constants/shapes';


import selectorBg from 'assets/bg-triangle.svg';

const SelectorContainer = styled.div `
  background: ${() => `url(${selectorBg})`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: 32rem 24rem;
  height: 24rem;
  padding: 5rem;
  position: relative;
  width: 32rem;
`;

const ShapeIcon = styled(Shape) `
  position: absolute;
`;

const ShapePaper = styled(ShapeIcon) `
  left: 0;
  top: 0;
`;

const ShapeScissors = styled(ShapeIcon) `
  right: 0;
  top: 0;
`;

const ShapeRock = styled(ShapeIcon) `
  bottom: 0;
  left: 0;
  margin: 0 auto;
  right: 0;
`;


function ShapeSelector({ shapes, onClick }) {
  return (
    <SelectorContainer>
      <ShapePaper shape={shapes[PAPER]} onClick={onClick} />
      <ShapeScissors shape={shapes[SCISSORS]} onClick={onClick} />
      <ShapeRock shape={shapes[ROCK]} onClick={onClick} />
    </SelectorContainer>
  );
}

export default ShapeSelector;
