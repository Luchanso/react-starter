import ReduxThunk from 'redux-thunk';
import logger from 'redux-logger';
import * as Redux from 'redux';
import debug from 'debug';
import reducer from './reducers';

const middlewares = [ReduxThunk];

if (debug.enabled('redux')) {
  middlewares.push(logger);
}

const midlleware = Redux.applyMiddleware(...middlewares);

let composeEnhancers = Redux.compose;

if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line no-underscore-dangle
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || Redux.compose;
}

const store = Redux.createStore(reducer, composeEnhancers(midlleware));

export default store;
