import React from 'react';
import { render } from 'react-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';

render(
    <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <App />
      </div>
    </ConnectedRouter>
  </Provider>,
    document.getElementById('root'));
registerServiceWorker();
