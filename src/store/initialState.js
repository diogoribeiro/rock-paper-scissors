import { WIN, LOSE, DRAW } from 'utils/constants/results';

import paperIcon from 'assets/shapes/icon-paper.svg';
import rockIcon from 'assets/shapes/icon-rock.svg';
import scissorsIcon from 'assets/shapes/icon-scissors.svg';

import { PAPER, SCISSORS, ROCK } from 'utils/constants/shapes';

export default {
  shapes: {
    [PAPER]: {
      icon: paperIcon,
      mainColor: '#4181e8',
      resultAgainsOponents: {
        paper: DRAW,
        rock: WIN,
        scissors: LOSE,
      },
      type: PAPER,
    },
    [ROCK]: {
      icon: rockIcon,
      mainColor: '#e84157',
      resultAgainsOponents: {
        paper: LOSE,
        rock: DRAW,
        scissors: WIN,
      },
      type: ROCK,
    },
    [SCISSORS]: {
      icon: scissorsIcon,
      mainColor: '#e8b941',
      resultAgainsOponents: {
        paper: WIN,
        rock: LOSE,
        scissors: DRAW,
      },
      type: SCISSORS,
    },
  },
};
