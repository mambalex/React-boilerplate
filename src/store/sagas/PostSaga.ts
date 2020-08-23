import { fetchSinglePost, fetchAllPosts } from 'services';
import { SinglePostRequest, PostResponse, PostsResponse } from 'types';
import { fetchAllPostsActions, fetchSinglePostActions } from 'store/actions';
import { put, call, takeEvery } from 'redux-saga/effects';
import { handleErrorMessage } from 'utils';

function* fetchSinglePostSaga(action: SinglePostRequest): Generator {
  try {
    const response = (yield call(
      fetchSinglePost,
      action.payload
    )) as PostResponse;
    yield put(fetchSinglePostActions.success(response.data));
  } catch (error) {
    yield put(fetchSinglePostActions.failure(handleErrorMessage(error)));
  }
}

function* fetchAllPostsSaga(): Generator {
  try {
    const response = (yield call(fetchAllPosts)) as PostsResponse;
    yield put(fetchAllPostsActions.success(response.data.slice(1, 11)));
  } catch (error) {
    yield put(fetchAllPostsActions.failure(handleErrorMessage(error)));
  }
}

const watchPost = [
  takeEvery(fetchSinglePostActions.request, fetchSinglePostSaga),
  takeEvery(fetchAllPostsActions.request, fetchAllPostsSaga),
];

export { watchPost };
