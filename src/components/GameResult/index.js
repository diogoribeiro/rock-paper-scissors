import React, { Fragment } from 'react';

import PlayAgainButton from 'components/GameResult/PlayAgainButton';
import Result from 'components/GameResult/Result';
import ResultContainer from 'components/GameResult/ResultContainer';
import ResultShape from 'components/GameResult/ResultShape';
import Selection from 'components/GameResult/Selection';
import SelectionCopy from 'components/GameResult/SelectionCopy';
import ShapesContainer from 'components/GameResult/ShapesContainer';

import winner from 'utils/winner';

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
            onClick={() => {}}
            winner={isPlayerWinner}
          />
          <SelectionCopy>YOU PICKED</SelectionCopy>
        </Selection>
        <ResultContainer desktop>
          <Result>{resultMessage(isPlayerWinner, isComputerWinner)}</Result>
          <PlayAgainButton onClick={onPlayAgain}>
            PLAY AGAIN
          </PlayAgainButton>
        </ResultContainer>
        <Selection>
          <ResultShape
            shape={computerSelection}
            onClick={() => {}}
            winner={isComputerWinner}
          />
          <SelectionCopy>THE HOUSE PICKED</SelectionCopy>
        </Selection>
      </ShapesContainer>
      <ResultContainer>
        <Result>{resultMessage(isPlayerWinner, isComputerWinner)}</Result>
        <PlayAgainButton onClick={onPlayAgain}>
          PLAY AGAIN
        </PlayAgainButton>
      </ResultContainer>
    </Fragment>
  );
}

export default GameResult;
