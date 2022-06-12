import { createSlice } from "@reduxjs/toolkit";
import { Status } from "../../common/constants";
const productSlice = createSlice({
  name: "product",
  initialState: {
    iphone: {
      status: Status.idle,
      data: [],
    },
    ipad: { status: Status.idle, data: [] },
  },
  reducers: {},
});
export default productSlice.reducer;
