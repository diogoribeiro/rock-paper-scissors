import React from 'react';
import ReactDOM from 'react-dom';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import { Provider } from 'react-redux';

import ContractForm from 'pages/ContractForm';

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
          <ContractForm />
        </Route>
      </Switch>
    </ConnectedRouter>
  </Provider>,
  root,
);
