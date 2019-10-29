import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducer from "../reducers/root_reducer";

const composeEnhancers = composeWithDevTools({ trace: true, traceLimit: 25 });

export default (preloadedState = {}) => createStore(
  rootReducer, preloadedState, composeEnhancers(
    applyMiddleware(thunk),
  )
);
