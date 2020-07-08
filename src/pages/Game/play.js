import { USER_PLAYER } from 'utils/constants/users';

function play(updatePlayerSelectedShape, computerMove, updateScore) {
  return function execute(shape) {
    updatePlayerSelectedShape(USER_PLAYER, shape);
    computerMove();
    updateScore();
  };
}

export default play;
