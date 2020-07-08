import { WIN, LOSE } from 'utils/constants/results';

function winner(playerSelection, computerSelection) {
  if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === WIN) {
    return playerSelection;
  }
  if (playerSelection.resultAgainsOponents[computerSelection.type.toLowerCase()] === LOSE) {
    return computerSelection;
  }

  return undefined;
}

export default winner;
