import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import sessionReducer from "./session";
//2.
import watchlistReducer from './watchlist'
import userReducer from './user'
//import portfolioReducer from './portfolio'
//import transactionReducer from './transaction'

const rootReducer = combineReducers({
  session: sessionReducer,
  // start here!  i want to track what?
  // js and reducer name
  watchlist:watchlistReducer,
  user:userReducer,
  // need to complete
  //transaction:transactionReducer
  //portfolio:portfolioReducer
});

let enhancer;

if (process.env.NODE_ENV === "production") {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
