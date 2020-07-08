import { UPDATE_PLAYER_SELECTED_SHAPE } from 'actions';

export default function(state = {}, { type, payload }) {
  switch (type) {
    case UPDATE_PLAYER_SELECTED_SHAPE: {
      return {
        ...state,
        [payload.player]: payload.shape,
      };
    }
    default:
      return state;
  }
}
