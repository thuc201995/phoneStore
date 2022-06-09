import { createSlice } from "@reduxjs/toolkit";

export const siderSlice = createSlice({
  name: "sider",
  initialState: {
    collapsed: false,
  },
  reducers: {
    toggleCollapsed: (state) => {
      state.collapsed = !state.collapsed;
    },
  },
});
export const { toggleCollapsed } = siderSlice.actions;
export default siderSlice.reducer;
