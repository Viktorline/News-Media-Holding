import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import type { News } from "../model/types";

const fetchFromAPI = async (skip: number) => {
  const response = await axios.get(
    `https://dummyjson.com/posts?limit=10${skip ? `&skip=${skip}` : ""}`
  );
  return response.data.posts;
};

export const fetchNews = createAsyncThunk<
  News[],
  void,
  { state: { newsList: { skip: number } } }
>("news/fetchNews", async (_, { getState }) => {
  const { skip } = getState().newsList;
  return fetchFromAPI(skip);
});

export const loadMoreNews = createAsyncThunk<
  News[],
  void,
  { state: { newsList: { skip: number } } }
>("news/loadMoreNews", async (_, { getState }) => {
  const { skip } = getState().newsList;
  return fetchFromAPI(skip);
});
