import React from 'react';
import styled from 'styled-components/macro';

import Shape from 'components/Shape';

const ResultContainer = styled.div `
  display: flex;
`;


function GameResult({ playerSelection, computerSelection, onPlayAgain }) {
  return (
    <ResultContainer>
      <Shape shape={playerSelection} onClick={ () => {}} />;
      <div>
        <span>YOU WIN</span>
        <button onClick={onPlayAgain}>
          PLAY AGAIN
        </button>
      </div>
      <Shape shape={computerSelection} onClick={ () => {}} />;
    </ResultContainer>
  );
}

export default GameResult;
