import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

import Shape from 'components/Shape';

const ShapesContainer = styled.div `
  align-items: center;
  display: flex;
  justify-content: space-between;
  max-width: 1000px;
  width: 80%;
`;

const Selection = styled.div `
  align-items: center;
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const ResultShape = styled(Shape) `
  @media (min-width: 600px) and (max-width: 991px) {
    height: 24rem;
    width: 24rem;
  }

  @media (min-width: 991px) {
    height: 32rem;
    width: 32rem;
  }
`;

const SelectionCopy = styled.span `
  color: hsl(0, 0%, 100%);
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  margin-top: 3rem;

  @media (min-width: 768px) {
    margin-bottom: 3rem;
    margin-top: 0;
  }
`;

const ResultContainer = styled.div `
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    display: none;
  }
`;

const LargeResultContainer = styled(ResultContainer) `
  display: none;
 
  @media (min-width: 768px) {
    display: flex;
    flex-direction: column;
  }
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
  cursor: pointer;
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
          <ResultShape shape={playerSelection} onClick={ () => {}} />
          <SelectionCopy>YOU PICKED</SelectionCopy>
        </Selection>
        <LargeResultContainer>
          <Result>{resultMessage(playerSelection, computerSelection)}</Result>
          <PlayAgain onClick={onPlayAgain}>
            PLAY AGAIN
          </PlayAgain>
        </LargeResultContainer>
        <Selection>
          <ResultShape shape={computerSelection} onClick={ () => {}} />
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
