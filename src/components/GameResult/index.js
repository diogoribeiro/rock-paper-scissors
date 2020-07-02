import React, { Fragment } from 'react';
import styled from 'styled-components/macro';

import Shape from 'components/Shape';

const ShapesContainer = styled.div `
  display: flex;
  justify-content: space-between;
  width: 80%;
`;

const ResultContainer = styled.div `
  display: flex;
  flex-direction: column;
`;

const Result = styled.span `
  color: hsl(0, 0%, 100%);
  font-size: 6rem;
  font-weight: bold;
`;

const PlayAgain = styled.button `
  border: none;
  border-radius: 10px;
  font-weight: bold;
  height: 6rem;
  letter-spacing: 0.3rem;
`;

function GameResult({ playerSelection, computerSelection, onPlayAgain }) {
  return (
    <Fragment>
      <ShapesContainer>
        <Shape shape={playerSelection} onClick={ () => {}} />
        <Shape shape={computerSelection} onClick={ () => {}} />
      </ShapesContainer>
      <ResultContainer>
        <Result>YOU WIN</Result>
        <PlayAgain onClick={onPlayAgain}>
          PLAY AGAIN
        </PlayAgain>
      </ResultContainer>
    </Fragment>
  );
}

export default GameResult;
