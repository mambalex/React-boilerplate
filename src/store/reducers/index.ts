import { postReducer } from './PostReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  post: postReducer,
});

export { rootReducer, postReducer };
