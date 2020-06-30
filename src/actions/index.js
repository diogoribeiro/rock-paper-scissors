import { COMPUTER_PLAYER, USER_PLAYER } from 'utils/constants/users';

export const ADD_TO_SCORE = 'ADD_TO_SCORE';
export const UPDATE_PLAYER_SELECTED_SHAPE = 'UPDATE_PLAYER_SELECTED_SHAPE';

function addToScore(value) {
  return {
    type: ADD_TO_SCORE,
    value,
  }
}

export function updatePlayerSelectedShape(player, shape) {
  return {
    type: UPDATE_PLAYER_SELECTED_SHAPE,
    payload: {
      player,
      shape,
    },
  }
}

export function setComputerMove(shapes) {
  const type = Math.floor(Math.random() * Object.keys(shapes).length);
  return updatePlayerSelectedShape(COMPUTER_PLAYER, shapes[Object.keys(shapes)[type]]);
}

export function computeScore() {
  return (dispatch, getState) => {
    const { match } = getState();
    const playerSelection = match[USER_PLAYER];
    const computerSelection = match[COMPUTER_PLAYER];

    let increment = 0;
    // TODO refactor this conditional statement
    if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === 'win') {
      increment = 1;
    } else if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === 'lose') {
      increment = -1;
    }
  
    dispatch(addToScore(increment));
  }
}
