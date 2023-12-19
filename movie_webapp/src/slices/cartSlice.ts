import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
const cartSlice = createSlice({
  name: "cart",
  initialState: {
    list: [] as any,
    noti: "",
  },
  reducers: {
    addMovie: (state, { payload }) => {
      const id = state.list.filter((movie: any) => movie.id === payload.id);
      const DOWN_PRICE = 1000000;
      const PRICE = Number(payload.budget) / DOWN_PRICE;
      if (id.length === 0) {
        state.list.push({
          ...payload,
          price: !!payload.budget ? (PRICE >= 50 ? PRICE : 50) : 200,
          quantity: 1,
        });
        toast.success("ĐÃ THÊM VÀO GIỎ HÀNG", { duration: 500 });
      } else {
        toast.error("ĐÃ CÓ TRONG GIỎ HÀNG", { duration: 500 });
      }
    },
    removeMovie: (state, { payload }) => {
      let indexOfMovie = -1;
      state.list.forEach((movie: any, index: number) => {
        if (movie.id === payload) {
          indexOfMovie = index;
        }
      });
      if (indexOfMovie >= 0) {
        state.list.splice(indexOfMovie, 1);
        toast.success("ĐÃ XOÁ KHỎI GIỎ HÀNG");
      }
    },
    removeList: (state) => {
      state.list = [];
    }
  },
});

export const { addMovie, removeMovie, removeList } = cartSlice.actions;
export default cartSlice.reducer;
