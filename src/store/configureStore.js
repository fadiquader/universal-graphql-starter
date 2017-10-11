import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import rootReducer from '../reducers';

const middlewares = [thunk];

let enhancer;

if (__DEV__ && process.env.BROWSER) {
  // const logger = reduxLogger({
  //   collapsed: true,
  // });
  // middleware.push(logger);
  enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
} else {
  // enhancer = applyMiddleware(...middleware);
  enhancer = compose;
}

export default function configureStore(initialState) {
  // Note: only Redux >= 3.1.0 supports passing enhancer as third argument.
  // See https://github.com/rackt/redux/releases/tag/v3.1.0
  const store = createStore(
    rootReducer,
    initialState,
    enhancer(applyMiddleware(...middlewares)),
  );

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (__DEV__ && module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default),
    );
  }

  return store;
}
