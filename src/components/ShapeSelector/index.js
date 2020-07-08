import React from 'react';
import PropTypes from 'prop-types';

import Paper from 'components/ShapeSelector/Paper';
import Rock from 'components/ShapeSelector/Rock';
import SelectorContainer from 'components/ShapeSelector/SelectorContainer';
import Scissors from 'components/ShapeSelector/Scissors';

import { PAPER, SCISSORS, ROCK } from 'utils/constants/shapes';
import { shapes } from 'utils/propTypes';

function ShapeSelector({ shapes, onClick }) {
  return (
    <SelectorContainer>
      <Paper shape={shapes[PAPER]} onClick={onClick} />
      <Scissors shape={shapes[SCISSORS]} onClick={onClick} />
      <Rock shape={shapes[ROCK]} onClick={onClick} />
    </SelectorContainer>
  );
}

ShapeSelector.propTypes = {
  onClick: PropTypes.func.isRequired,
  shapes: shapes.isRequired,
};

export default ShapeSelector;
