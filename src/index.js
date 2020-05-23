import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import Game from 'pages/Game';

import store, { history } from './store';

import * as serviceWorker from './serviceWorker';

import './index.css';

serviceWorker.unregister();

const root = document.querySelector('#root');
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Switch>
        <Route exact path="/">
          <Game />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  root,
);
