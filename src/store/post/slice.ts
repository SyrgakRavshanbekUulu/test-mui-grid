import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IError } from 'shared/types/error';
import { IPost, PostInitialState } from 'shared/types/post';
import { getAllPosts, getPost } from './reducers';

const initialState: PostInitialState = {
  posts: [],
  loading: false,
}

const slice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setError: (state, action: PayloadAction<IError>) => {
      state.error = action.payload
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getAllPosts.pending, (state) => {
      state.loading = true;
      state.error = {
        error: false,
        message: ''
      }
    });
    builder.addCase(getAllPosts.fulfilled, (state, actoin: PayloadAction<IPost[]>) => {
      state.loading = false;
      state.error = {
        error: false,
        message: ''
      };
      state.posts = actoin.payload
    });
    builder.addCase(getPost.pending, (state) => {
      state.loading = true;
      state.error = {
        error: false,
        message: ''
      }
    });
    builder.addCase(getPost.fulfilled, (state, actoin: PayloadAction<IPost>) => {
      state.loading = false;
      state.error = {
        error: false,
        message: ''
      };
      state.currentPost = actoin.payload
    })
  }
})

export default slice;