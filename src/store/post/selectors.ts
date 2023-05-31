import { RootState } from 'store/store';

const selectAllPosts = (state: RootState) => {
  return state.posts.posts;
}

const selectLoading = (state: RootState) => {
  return state.posts.loading;
}

const selectError = (state: RootState) => {
  return state.posts.error;
}

const selectCurrentPost = (state: RootState) => {
  return state.posts.currentPost;
}

export {
  selectAllPosts,
  selectLoading,
  selectError,
  selectCurrentPost
}