import React from 'react';
import PropTypes from 'prop-types';

import GameTitle from 'components/Header/GameTitle';
import HeaderContainer from 'components/Header/HeaderContainer';
import Score from 'components/Header/Score';
import ScoreContainer from 'components/Header/ScoreContainer';
import ScoreTitle from 'components/Header/ScoreTitle';

function Board({ score }) {
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

Board.propTypes = {
  score: PropTypes.number,
};

Board.defaultProps = {
  score: 0,
};

export default Board;
