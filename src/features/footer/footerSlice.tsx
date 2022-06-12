import { createSlice } from "@reduxjs/toolkit";

export const headerSilce = createSlice({
  name: "header",
  initialState: {
    isFixed: false,
    sanPham: [
      { title: "iphone", link: "/" },
      { title: "ipad", link: "/" },
      { title: "mac", link: "/" },
      { title: "apple watch", link: "/" },
      { title: "âm thanh", link: "/" },
      { title: "phụ kiện", link: "/" },
      { title: "dịch vụ", link: "/" },
    ],
    thongTin: [
      { title: "giới thiệu", link: "/" },
      { title: "khuyến mãi", link: "/" },
      { title: "bảo hanh và sửa chữa", link: "/" },
      { title: "tuyển dụng", link: "/" },
      { title: "tin tức", link: "/" },
      { title: "check IMEI", link: "/" },
      { title: "phương thức thanh toán", link: "/" },
      { title: "gửi góp ý, kiếu nại", link: "/" },
    ],
    chinhSach: [
      { title: "trả góp", link: "/" },
      { title: "giao hàng", link: "/" },
      { title: "giao hàng (ZaloPay)", link: "/" },
      { title: "huỷ giao dịch", link: "/" },
      { title: "đổi trả", link: "/" },
      { title: "bảo hành", link: "/" },
      { title: "giải quyết khiếu nại", link: "/" },
      { title: "bảo mật thông tin", link: "/" },
    ],
    diaChi: [
      { title: "Tìm Store trên Google Map", link: "/" },
      { title: "hệ thống cửa hàng", link: "/" },
    ],
    lienHe: [
      { title: "Mua hàng:", value: "1900.6626", link: "/" },
      { title: "Khiếu nại:", value: "0886.308.688", link: "/" },
      { title: "Doanh nghiệp & Đối tác:", value: "0886.308.688", link: "/" },
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
