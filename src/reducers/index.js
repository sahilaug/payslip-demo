import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import { computeReducer } from './computeReducer';

const appReducer = combineReducers({
  compute: computeReducer,
  form: formReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export { rootReducer };
