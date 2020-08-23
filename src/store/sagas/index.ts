import { all } from 'redux-saga/effects';
import { watchPost } from './PostSaga';

export default function* rootSaga() {
  yield all([...watchPost]);
}
