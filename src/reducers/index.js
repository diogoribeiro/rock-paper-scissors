import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import match from 'reducers/match';
import score from 'reducers/score';
import shapes from 'reducers/shapes';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    match,
    score,
    shapes,
  });

export default createRootReducer;
