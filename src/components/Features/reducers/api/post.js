const { createAsyncThunk } = require("@reduxjs/toolkit");

import axios from 'axios';


// Define the fetchPost async thunk using Axios
export const fetchPost = createAsyncThunk("fetchPost", async () => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showall`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch posts: ' + error.message);
  }
});

// Define the createPost async thunk using Axios
export const createPost = createAsyncThunk("post/createPost", async (data) => {
  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_BASE_URL}/post/create`, data);
    return response.data;
  } catch (error) {
    throw new Error('Failed to create post: ' + error.message);
  }
});

// Define the fetchPostSingle async thunk using Axios
export const fetchPostSingle = createAsyncThunk("fetchPostSingle", async (slug) => {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/post/showasingle/${slug}`);
    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch single post: ' + error.message);
  }
});