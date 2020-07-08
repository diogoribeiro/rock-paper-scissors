import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import Board from 'components/Board';
import Header from 'components/Header';
import GameResult from 'components/GameResult';
import ShapeSelector from 'components/ShapeSelector';

import play from 'pages/Game/play';
import when from 'utils/when';
import { shapes } from 'utils/propTypes';

import { computeScore, setComputerMove, updatePlayerSelectedShape } from 'actions';
import { USER_PLAYER, COMPUTER_PLAYER } from 'utils/constants/users';

function renderSelector(shapes, setPlayerSelection) {
  return <ShapeSelector shapes={shapes} onClick={setPlayerSelection} />;
}

function renderGameResult(playerSelection, computerSelection, resetGame) {
  return (
    <GameResult
      computerSelection={computerSelection}
      playerSelection={playerSelection}
      onPlayAgain={resetGame}
    />
  );
}

// eslint-disable-next-line no-shadow
function Game({ computeScore, match, score, setComputerMove, shapes, updatePlayerSelectedShape }) {
  const playerSelection = match[USER_PLAYER];
  const computerSelection = match[COMPUTER_PLAYER];

  const computeResult = play(
    updatePlayerSelectedShape,
    () => setComputerMove(shapes),
    computeScore,
  );

  const resetGame = () => {
    updatePlayerSelectedShape(USER_PLAYER, undefined);
    updatePlayerSelectedShape(COMPUTER_PLAYER, undefined);
  };

  if (!shapes) return 'Loading...';

  return (
    <Board>
      <Header score={score} />
      {when(playerSelection === undefined)(() => renderSelector(shapes, computeResult))}
      {when(playerSelection !== undefined)(() =>
        renderGameResult(playerSelection, computerSelection, resetGame),
      )}
    </Board>
  );
}

Game.propTypes = {
  computeScore: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
  score: PropTypes.number.isRequired,
  setComputerMove: PropTypes.func.isRequired,
  shapes: shapes.isRequired,
  updatePlayerSelectedShape: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    match: state.match,
    score: state.score || 0,
    shapes: state.shapes,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    computeScore: (playerSelection, computerSelection) =>
      dispatch(computeScore(playerSelection, computerSelection)),
    updatePlayerSelectedShape: (player, shape) =>
      dispatch(updatePlayerSelectedShape(player, shape)),
    setComputerMove: shapes => dispatch(setComputerMove(shapes)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Game);
