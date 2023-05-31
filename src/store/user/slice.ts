import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { getAllUsers, getUser } from './reducers';
import { IUser, UsersInitialState } from 'shared/types/users';
import { IError } from 'shared/types/error';

const initialState: UsersInitialState = {
  users: [],
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
    builder.addCase(getAllUsers.pending, (state) => {
      state.loading = true;
      state.error = {
        error: false,
        message: ''
      }
    });
    builder.addCase(getAllUsers.fulfilled, (state, actoin: PayloadAction<IUser[]>) => {
      state.loading = false;
      state.error = {
        error: false,
        message: ''
      };
      state.users = actoin.payload
    });
    builder.addCase(getUser.pending, (state) => {
      state.loading = true;
      state.error = {
        error: false,
        message: ''
      }
    });
    builder.addCase(getUser.fulfilled, (state, actoin: PayloadAction<IUser>) => {
      state.loading = false;
      state.error = {
        error: false,
        message: ''
      };
      state.currentUser = actoin.payload
    })
  }
})

export default slice;