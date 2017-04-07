import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import { ConnectedRouter } from 'react-router-redux'
import createHistory from 'history/createBrowserHistory' //history api
const history = createHistory(); //Use a history moudle
import configureStore from './store/configureStore';
import Routes from './routes';

// Now you can dispatch navigation actions from anywhere!
// store.dispatch(push('/foo'))

const store = configureStore(history);

render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Routes/>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('zoo2App')
);
