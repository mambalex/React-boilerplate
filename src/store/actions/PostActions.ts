import { Post } from 'types';
import { createAsyncAction } from 'typesafe-actions';

const fetchAllPostsActions = createAsyncAction(
  'FETCH_POSTS_REQUEST',
  'FETCH_POSTS_SUCCESS',
  'FETCH_POSTS_FAILURE'
)<undefined, Post[], string>();

const fetchSinglePostActions = createAsyncAction(
  'FETCH_A_POST_REQUEST',
  'FETCH_A_POST_SUCCESS',
  'FETCH_A_POST_FAILURE'
)<number, Post, string>();

export { fetchAllPostsActions, fetchSinglePostActions };
