import { createSlice } from "@reduxjs/toolkit";

export const CreateBookSlice = createSlice({
  name: "createBook",
  initialState: {
    isOpen: true,
  },
  reducers: {
    close: (state) => {
      state.isOpen = false;
    },
    open: (state) => {
      state.isOpen = true;
    },
  },
});

export const { close, open } = CreateBookSlice.actions;
export default CreateBookSlice.reducer;
