import 'sanitize.css/sanitize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import Routing from './routes';


const renderToDomElement = document.getElementById('root'); // eslint-disable-line
const store = configureStore({}, browserHistory);


ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <Routing />
    </Provider>
  </AppContainer>,
  renderToDomElement
);

// HMR for React
if (module.hot) {
  module.hot.accept('./routes', () => {
    const NextHotLoaded = require('./routes.js').default; // eslint-disable-line
    ReactDOM.render(
      <AppContainer>
        <NextHotLoaded />
      </AppContainer>
      ,
      renderToDomElement
    );
  });
}