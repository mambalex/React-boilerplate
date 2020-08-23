import { PostState, PostActions } from 'types';
import { getType } from 'typesafe-actions';
import { fetchAllPostsActions, fetchSinglePostActions } from 'store/actions';

const initialState: PostState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

const postReducer = (state = initialState, action: PostActions): PostState => {
  switch (action.type) {
    case getType(fetchAllPostsActions.request):
    case getType(fetchSinglePostActions.request):
      return { ...state, loading: true };
    case getType(fetchSinglePostActions.success):
      return {
        ...state,
        loading: false,
        error: null,
        post: action.payload,
      };
    case getType(fetchAllPostsActions.success):
      return {
        ...state,
        loading: false,
        error: null,
        posts: action.payload,
      };
    case getType(fetchAllPostsActions.failure):
    case getType(fetchSinglePostActions.failure):
      return {
        ...state,
        loading: false,
        error: action.payload || 'Something went wrong.',
      };

    default:
      return state;
  }
};

export { postReducer };
