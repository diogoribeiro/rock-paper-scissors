import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import shapes from 'reducers/shapes';

const createRootReducer = history =>
  combineReducers({
    router: connectRouter(history),
    shapes,
  });

export default createRootReducer;
