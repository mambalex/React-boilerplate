import { fetchAllPostsActions, fetchSinglePostActions } from 'store/actions';
import { PostState } from 'types';
import { postReducer } from '../index';

const initialState: PostState = {
  posts: [],
  post: null,
  loading: false,
  error: null,
};

const ResponseData = {
  posts: [
    {
      userId: 1,
      id: 1,
      title: 'qui est esse',
      body:
        'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
    },
    {
      userId: 2,
      id: 2,
      title: 'eum et est occaecati',
      body:
        'ullam et saepe reiciendis voluptatem adipisci sit amet autem assumenda provident rerum culpa quis hic commodi nesciunt rem tenetur doloremque ipsam iure quis sunt voluptatem rerum illo velit',
    },
  ],
  post: {
    userId: 1,
    id: 1,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
};

describe('Post Reducer', () => {
  // Get Posts request
  it('should start loading on FETCH_POSTS_REQUEST', () => {
    expect(postReducer(initialState, fetchAllPostsActions.request())).toEqual({
      ...initialState,
      loading: true,
    });
  });

  // Get Posts failure
  it('should display error message on FETCH_POSTS_FAILURE', () => {
    expect(
      postReducer(initialState, fetchAllPostsActions.failure('Posts not found'))
    ).toEqual({
      ...initialState,
      loading: false,
      error: 'Posts not found',
    });
  });

  // Get Posts success
  it('should display error message on FETCH_POSTS_SUCCESS', () => {
    expect(
      postReducer(
        initialState,
        fetchAllPostsActions.success(ResponseData.posts)
      )
    ).toEqual({
      ...initialState,
      posts: ResponseData.posts,
      loading: false,
      error: null,
    });
  });

  // Get single Post request
  it('should start loading on FETCH_A_POST_REQUEST', () => {
    expect(
      postReducer(initialState, fetchSinglePostActions.request(1))
    ).toEqual({
      ...initialState,
      loading: true,
      error: null,
    });
  });

  // Get single Post failure
  it('should display error message on FETCH_A_POST_FAILURE', () => {
    expect(
      postReducer(
        initialState,
        fetchSinglePostActions.failure('Post not found')
      )
    ).toEqual({
      ...initialState,
      loading: false,
      error: 'Post not found',
    });
  });

  // Get single Post success
  it('should display error message on FETCH_A_POST_SUCCESS', () => {
    expect(
      postReducer(
        initialState,
        fetchSinglePostActions.success(ResponseData.post)
      )
    ).toEqual({
      ...initialState,
      post: ResponseData.post,
      loading: false,
      error: null,
    });
  });
});
