import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import createBookReducer from "./features/createBook/createBookSlice";
import headerReducer from "./features/header/headerSlice";
import siderReducer from "./features/sider/siderSlice";
export const store = configureStore({
  reducer: {
    createBook: createBookReducer,
    header: headerReducer,
    sider: siderReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: process.env.NODE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
