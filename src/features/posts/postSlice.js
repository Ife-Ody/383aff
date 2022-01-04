import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "./fetchPostAPI";

const initialState = {
  posts: [],
  status: "idle",
  page: 0,
  filter: "All",
};

// async THUNK to fetch posts
export const fetchDataAsync = createAsyncThunk(
  "posts/fetchPosts",
  async (page) => {
    const response = await fetchPosts(page);
    // The value we return becomes the `fulfilled` action payload
    return response;
  }
);

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchDataAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchDataAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.posts = state.posts.concat(action.payload);
        state.page += 1;
      });
  },
});

export const selectPage = (state) => state.posts.page;
export const selectPost = (state) => state.posts.posts;
export const selectFilter = (state) => state.posts.filter;
export const selectStatus = (state) => state.posts.status;

export const { setFilter } = postSlice.actions;

export default postSlice.reducer;
