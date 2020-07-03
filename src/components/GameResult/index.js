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
  box-shadow: ${({ winner }) => winner ? '0px 0px 5px 40px rgba(31,55,86, 0.5), 0px 0px 5px 80px rgba(31,55,86, 0.3), 0px 0px 5px 120px rgba(31,55,86, 0.2);' : 'none'};
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

function winner(playerSelection, computerSelection) {
  // TODO refactor this conditional statement
  if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === 'win') {
    return playerSelection;
  } else if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === 'lose') {
    return computerSelection;
  }

  return undefined;
}

function resultMessage(playerSelection, computerSelection) {
  let message = 'DRAW';
  const winnerSelection = winner(playerSelection, computerSelection);
  
  if (winnerSelection === playerSelection) {
    message = 'YOU WIN';
  } else if (winnerSelection === computerSelection) {
    message = 'YOU LOSE';
  }

  return message;
}

function GameResult({ playerSelection, computerSelection, onPlayAgain }) {
  const isPlayerWinner = winner(playerSelection, computerSelection) === playerSelection;
  const isComputerWinner = winner(computerSelection, playerSelection) === computerSelection;
  return (
    <Fragment>
      <ShapesContainer>
        <Selection>
          <ResultShape
            shape={playerSelection}
            onClick={ () => {}}
            winner={isPlayerWinner}
          />
          <SelectionCopy>YOU PICKED</SelectionCopy>
        </Selection>
        <LargeResultContainer>
          <Result>{resultMessage(playerSelection, computerSelection)}</Result>
          <PlayAgain onClick={onPlayAgain}>
            PLAY AGAIN
          </PlayAgain>
        </LargeResultContainer>
        <Selection>
          <ResultShape
            shape={computerSelection}
            onClick={ () => {}}
            winner={isComputerWinner}
          />
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
