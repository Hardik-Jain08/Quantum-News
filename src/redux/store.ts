import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./slices/articlesSlice";
import payoutReducer from "./slices/payoutSlice";

export const store = configureStore({
  reducer: {
    articles: articlesReducer,
    payout: payoutReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
