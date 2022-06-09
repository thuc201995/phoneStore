import { createSlice } from "@reduxjs/toolkit";

export const headerSilce = createSlice({
  name: "header",
  initialState: {
    isFixed: false,
  },
  reducers: {
    toggleFixed: (state) => {
      state.isFixed = !state.isFixed;
    },
  },
});
export const { toggleFixed } = headerSilce.actions;
export default headerSilce.reducer;
