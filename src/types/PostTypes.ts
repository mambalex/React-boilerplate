import { ActionType } from 'typesafe-actions';
import { fetchSinglePostActions } from 'store/actions/PostActions';
import * as postActions from 'store/actions/PostActions';

export interface Post {
  id: number;
  userId: number;
  title: string;
  body: string;
}

export interface PostState {
  posts: Post[];
  post: Post | null;
  loading: boolean;
  error: string | null;
}

export type PostActions = ActionType<typeof postActions>;
export type SinglePostRequest = ReturnType<
  typeof fetchSinglePostActions.request
>;
export interface PostResponse {
  data: Post;
}
export interface PostsResponse {
  data: Post[];
}
