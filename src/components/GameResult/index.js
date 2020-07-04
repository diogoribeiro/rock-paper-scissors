import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

import Shape from 'components/Shape';

import winner from 'utils/winner';

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
  box-shadow: ${
    ({ winner }) => winner
      ? `0px 0px 5px 20px rgba(255, 255, 255, 0.05),
        0px 0px 5px 60px rgba(255, 255, 255, 0.05),
        0px 0px 5px 100px rgba(255, 255, 255, 0.05)`
      : 'none'
  };
  z-index: ${({ winner }) => winner ? -1 : 'auto'};

  @media (min-width: 600px) {
    box-shadow: ${
      ({ winner }) => winner
        ? `0px 0px 5px 40px rgba(255, 255, 255, 0.05),
          0px 0px 5px 100px rgba(255, 255, 255, 0.05),
          0px 0px 5px 180px rgba(255, 255, 255, 0.05)`
        : 'none'
    };  
  }

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
  display: ${({ desktop }) => desktop ? 'none' : 'flex'};
  flex-direction: column;

  @media (min-width: 768px) {
    display: ${({ desktop }) => desktop ? 'flex' : 'none'};
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
  background: hsl(0, 0%, 100%);
  border: none;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  height: 6rem;
  letter-spacing: 0.3rem;
`;

function resultMessage(isPlayerWinner, isComputerWinner) {
  let message = 'DRAW';
  
  if (isPlayerWinner) {
    message = 'YOU WIN';
  } else if (isComputerWinner) {
    message = 'YOU LOSE';
  }

  return message;
}

function GameResult({ playerSelection, computerSelection, onPlayAgain }) {
  const matchWinner = winner(playerSelection, computerSelection);
  const isPlayerWinner =  matchWinner === playerSelection;
  const isComputerWinner = matchWinner === computerSelection;

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
        <ResultContainer desktop>
          <Result>{resultMessage(isPlayerWinner, isComputerWinner)}</Result>
          <PlayAgain onClick={onPlayAgain}>
            PLAY AGAIN
          </PlayAgain>
        </ResultContainer>
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
        <Result>{resultMessage(isPlayerWinner, isComputerWinner)}</Result>
        <PlayAgain onClick={onPlayAgain}>
          PLAY AGAIN
        </PlayAgain>
      </ResultContainer>
    </Fragment>
  );
}

export default GameResult;
