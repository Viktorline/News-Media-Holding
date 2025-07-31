import { createSlice } from "@reduxjs/toolkit";
import { fetchNews, loadMoreNews } from "../../../entities/news/api/getNews";
import type { News } from "../../../entities/news/model/types";

interface NewsState {
  news: News[];
  loading: boolean;
  hasMore: boolean;
  skip: number;
  error: string | null;
}

const initialState: NewsState = {
  news: [],
  loading: false,
  hasMore: true,
  skip: 0,
  error: null,
};

const handlePending = (state: NewsState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state: NewsState, action: any, isInitial: boolean) => {
  if (isInitial) {
    state.news = action.payload;
    state.skip = 10;
  } else {
    state.news.push(...action.payload);
    state.skip += 10;
  }
  state.hasMore = action.payload.length === 10;
  state.loading = false;
};

const handleRejected = (state: NewsState, action: any) => {
  state.loading = false;
  state.error = action.error.message || "Ошибка загрузки новостей";
};

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    resetNews: (state) => {
      state.news = [];
      state.skip = 0;
      state.hasMore = true;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, handlePending)
      .addCase(fetchNews.fulfilled, (state, action) =>
        handleFulfilled(state, action, true)
      )
      .addCase(fetchNews.rejected, handleRejected)
      .addCase(loadMoreNews.pending, handlePending)
      .addCase(loadMoreNews.fulfilled, (state, action) =>
        handleFulfilled(state, action, false)
      )
      .addCase(loadMoreNews.rejected, handleRejected);
  },
});

export const { resetNews, clearError } = newsSlice.actions;
export default newsSlice.reducer;
