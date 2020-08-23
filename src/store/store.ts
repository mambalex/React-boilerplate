import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from 'store/sagas';
import { rootReducer } from 'store/reducers';

// Enable Redux DevTools extension for dev
let composeEnhancers = compose;
if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
  if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
    composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export { store };
