import { createSlice } from "@reduxjs/toolkit";

export const headerSilce = createSlice({
  name: "header",
  initialState: {
    isFixed: false,
    menu: [
      {
        title: "Iphone",
        link: "/iphone",
      },
      {
        link: "/ipad",
        title: "Ipad",
      },
      {
        link: "/iphone",
        title: "Mac",
      },
      {
        link: "/iphone",
        title: "Appple Watch",
      },
      {
        link: "/iphone",
        title: "Âm thanh",
      },
      {
        link: "/phu-kien",
        title: "Phụ kiện",
      },
      {
        title: "Dịch vụ",
      },
      {
        link: "/iphone",
        title: "Khuyến mãi",
      },
      {
        link: "/iphone",
        title: "Trả Góp",
      },
    ],
  },
  reducers: {
    toggleFixed: (state) => {
      state.isFixed = !state.isFixed;
    },
  },
});
export const { toggleFixed } = headerSilce.actions;
export default headerSilce.reducer;
