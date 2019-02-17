import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Root from './Root';
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, compose, createStore} from "redux";
import {multiClientMiddleware} from 'redux-axios-middleware';
import reducers from "./reducers/index";
import logger from "redux-logger";
import {AuthenticateActionType} from "./actions/authenticate.action";
import {clients, clientsList} from "./config/clients";
import {attachAuthInterceptor, attachRequestInterceptor, attachResponseInterceptor} from "./config/interceptors";

function allegroAuthMiddleware() {
  return () => next => (action) => {
    if (AuthenticateActionType.CONNECTION_SUCCESS === action.type) {
      attachAuthInterceptor(clients.allegroApi.client, action.payload.data.access_token);
    }
    return next(action);
  };
}

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(multiClientMiddleware(clients), allegroAuthMiddleware(), logger))
);

clientsList.forEach(({client}) => {
  attachRequestInterceptor(client, store.dispatch);
  attachResponseInterceptor(client, store.dispatch);
});


ReactDOM.render(
  <Provider store={store}>
    <Root/>
  </Provider>, document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
