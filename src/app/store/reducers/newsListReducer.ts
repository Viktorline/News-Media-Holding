import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import type { News } from "../../../entities/news/model/types";
import { mockNews } from "../../../entities/news/model/mockData";

interface NewsState {
  news: News[];
  loading: boolean;
  hasMore: boolean;
  skip: number;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  hasMore: true,
  skip: 0,
};

export const fetchNews = createAsyncThunk<
  News[],
  void,
  { state: { news: NewsState } }
>("news/fetchNews", async (_, { getState }) => {
  // const { skip } = getState().news;
  // const response = await axios.get(
  //   `https://dummyjson.com/posts?limit=10&skip=${skip}`
  // );
  // const response = await fetch(
  //   `https://dummyjson.com/posts?limit=10&skip=${skip}`
  // );
  // const data = await response.json();
  return mockNews;
});

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.news.push(...action.payload);
        state.skip += 10;
        state.hasMore = action.payload.length === 10;
        state.loading = false;
      })
      .addCase(fetchNews.rejected, (state) => {
        state.loading = false;
      });
  },
});

export default newsSlice.reducer;
