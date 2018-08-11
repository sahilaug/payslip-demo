import { fork, all } from 'redux-saga/effects';
import { computeSagas } from './computeSagas';

const sagas = function* sagas() {
  yield all([fork(computeSagas)]);
};

export { sagas };
