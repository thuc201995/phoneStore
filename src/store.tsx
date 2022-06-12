import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import headerSlice from "./features/header/headerSlice";
import footerSlice from "./features/footer/footerSlice";
import { apiSlice } from "./features/api/apiSlice";

export const store = configureStore({
  reducer: {
    header: headerSlice,
    footer: footerSlice,
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger).concat(apiSlice.middleware),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
