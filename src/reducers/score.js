import { ADD_TO_SCORE } from 'actions';

export default function(state = 0, action) {
  switch(action.type) {
    case ADD_TO_SCORE: {
      return state + action.value;
    }
    default: return state;
  }
}
