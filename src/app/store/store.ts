import { configureStore } from "@reduxjs/toolkit";
import newsItemModalReducer from "./reducers/newsItemModalReducer";
import newsListReducer from "./reducers/newsListReducer";

export const store = configureStore({
  reducer: {
    newsList: newsListReducer,
    newsItem: newsItemModalReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
