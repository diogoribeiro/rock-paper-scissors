import { createBrowserHistory } from 'history';
import promiseMiddleware from 'redux-promise';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';

import rootReducer from 'reducers';

export const history = createBrowserHistory();

const initialState = {};
const enhancers = [];
const middleware = [thunk, promiseMiddleware, routerMiddleware(history)];

if (process.env.NODE_ENV === 'development') {
  // eslint-disable-next-line no-underscore-dangle
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__;
  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension({ trace: true }));
  }
}

const composedEnhancers = compose(applyMiddleware(...middleware), ...enhancers);

const store = createStore(rootReducer(history), initialState, composedEnhancers);

export default store;
