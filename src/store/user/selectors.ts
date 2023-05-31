import { RootState } from 'store/store';

const selectAllUsers = (state: RootState) => {
  return state.users.users;
}

const selectLoading = (state: RootState) => {
  return state.users.loading;
}

const selectError = (state: RootState) => {
  return state.users.error;
}

const selectCurrentUser = (state: RootState) => {
  return state.users.currentUser;
}

export {
  selectAllUsers,
  selectLoading,
  selectError,
  selectCurrentUser
}