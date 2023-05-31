import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'service/api/index';

const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async () => {
    const response = await api.users.getAllUsers();
    const photos = await api.photos.getPhotos();
    const users = response.data?.map((user, i) => ({...user, photo: photos.data[i].url}));
    return users;
  }
);

const getUser = createAsyncThunk(
  'users/getUser',
  async (id: number | string) => {
    const response = await api.users.getUser(id);
    return response.data;
  }
);
export { getAllUsers, getUser };