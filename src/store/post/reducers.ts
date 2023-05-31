import { createAsyncThunk } from '@reduxjs/toolkit';
import api from 'service/api/index';

const getAllPosts = createAsyncThunk(
  'posts/getAllPosts',
  async () => {
    const response = await api.posts.getAllPosts();
    return response.data;
  }
);

const getPost = createAsyncThunk(
  'posts/getPost',
  async (id: number | string) => {
    const response = await api.posts.getPost(id);
    return response.data;
  }
);
export { getAllPosts, getPost };