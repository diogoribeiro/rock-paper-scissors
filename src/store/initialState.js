import paperIcon from 'assets/shapes/icon-paper.svg';
import rockIcon from 'assets/shapes/icon-rock.svg';
import scissorsIcon from 'assets/shapes/icon-scissors.svg';

export default {
  shapes: {
    paper: {
      icon: paperIcon,
      mainColor: '#4181e8',
      resultAgainsOponents: {
        paper: 'tie',
        rock: 'win',
        scissors: 'lose',
      },
      type: 'paper',
    },
    rock: {
      icon: rockIcon,
      mainColor: '#e84157',
      resultAgainsOponents: {
        paper: 'lose',
        rock: 'tie',
        scissors: 'win',
      },
      type: 'rock',
    },
    scissors: {
      icon: scissorsIcon,
      mainColor: '#e8b941',
      resultAgainsOponents: {
        paper: 'win',
        rock: 'lose',
        scissors: 'tie',
      },
      type: 'scissors',
    },
  },
}
