import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { News } from "../../../entities/news/model/types";

interface NewsModalState {
  isModalOpen: boolean;
  selectedNews: News | null;
}

const initialState: NewsModalState = {
  isModalOpen: false,
  selectedNews: null,
};

const newsModalSlice = createSlice({
  name: "newsModal",
  initialState,
  reducers: {
    openNewsModal(state, action: PayloadAction<News>) {
      state.selectedNews = action.payload;
      state.isModalOpen = true;
    },
    closeNewsModal(state) {
      state.selectedNews = null;
      state.isModalOpen = false;
    },
  },
});

export const { openNewsModal, closeNewsModal } = newsModalSlice.actions;
export default newsModalSlice.reducer;
