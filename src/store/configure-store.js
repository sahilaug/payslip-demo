import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { rootReducer } from '../reducers';
import { sagas } from '../sagas';

const sagaMiddleware = createSagaMiddleware();

function configureStore(initialState = {}) {
  const store = createStore(
    rootReducer,
    initialState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
  );
  sagaMiddleware.run(sagas);
  return store;
}

export { configureStore };
