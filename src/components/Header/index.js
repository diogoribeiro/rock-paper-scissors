import React from 'react';

import GameTitle from 'components/Header/GameTitle';
import HeaderContainer from 'components/Header/HeaderContainer';
import Score from 'components/Header/Score';
import ScoreContainer from 'components/Header/ScoreContainer';
import ScoreTitle from 'components/Header/ScoreTitle';

function Board({ score = 0 }) {
  return (
    <HeaderContainer>
      <GameTitle>
        <span>ROCK</span>
        <span>PAPER</span>
        <span>SCISSORS</span>
      </GameTitle>
      <ScoreContainer>
        <ScoreTitle>SCORE</ScoreTitle>
        <Score>{score}</Score>
      </ScoreContainer>
    </HeaderContainer>
  );
}

export default Board;
