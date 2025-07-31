import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { News } from "../model/types";

interface NewsState {
  news: News[];
  loading: boolean;
  hasMore: boolean;
  skip: number;
  error: string | null;
}

const fetchNewsAPI = async (skip: number): Promise<News[]> => {
  const response = await axios.get(
    `https://dummyjson.com/posts?limit=10${skip ? `&skip=${skip}` : ""}`
  );
  return response.data.posts;
};

export const fetchNews = createAsyncThunk<
  News[],
  void,
  { state: { newsList: NewsState } }
>("news/fetchNews", async (_, { getState }) => {
  const { skip } = getState().newsList;
  return fetchNewsAPI(skip);
});

export const loadMoreNews = createAsyncThunk<
  News[],
  void,
  { state: { newsList: NewsState } }
>("news/loadMoreNews", async (_, { getState }) => {
  const { skip } = getState().newsList;
  return fetchNewsAPI(skip);
});
