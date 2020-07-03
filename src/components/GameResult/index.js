import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

import Shape from 'components/Shape';

const ShapesContainer = styled.div `
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const Selection = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const SelectionCopy = styled.span `
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  margin-top: 3rem;
`;

const ResultContainer = styled.div `
  display: flex;
  flex-direction: column;
`;

const Result = styled.span `
  color: hsl(0, 0%, 100%);
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const PlayAgain = styled.button `
  border: none;
  border-radius: 10px;
  font-weight: bold;
  height: 6rem;
  letter-spacing: 0.3rem;
`;

function resultMessage(playerSelection, computerSelection) {
  let message = 'DRAW';
  // TODO refactor this conditional statement
  if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === 'win') {
    message = 'YOU WIN';
  } else if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === 'lose') {
    message = 'YOU LOSE';
  }

  return message;
}

function GameResult({ playerSelection, computerSelection, onPlayAgain }) {
  return (
    <Fragment>
      <ShapesContainer>
        <Selection>
          <Shape shape={playerSelection} onClick={ () => {}} />
          <SelectionCopy>YOU PICKED</SelectionCopy>
        </Selection>
        <Selection>
          <Shape shape={computerSelection} onClick={ () => {}} />
          <SelectionCopy>THE HOUSE PICKED</SelectionCopy>
        </Selection>
      </ShapesContainer>
      <ResultContainer>
        <Result>{resultMessage(playerSelection, computerSelection)}</Result>
        <PlayAgain onClick={onPlayAgain}>
          PLAY AGAIN
        </PlayAgain>
      </ResultContainer>
    </Fragment>
  );
}

export default GameResult;
