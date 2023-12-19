import { createSlice } from "@reduxjs/toolkit";

const heroSlice = createSlice({
  name: "hero",
  initialState: {
    heroData: [] as any,
    errors: {} as any,
  },
  reducers: {
    fetchDataHeroSuccess: (state, { payload }: any) => {
      // console.log(payload.results)
      state.heroData = payload.results.slice(0, 4);
    },
    fetchDataHeroFailure: (state, { payload }: any) => {
      state.errors = payload;
      alert("Request Fail");
    },
  },
});

export const { fetchDataHeroSuccess, fetchDataHeroFailure } =
  heroSlice.actions;
export default heroSlice.reducer;
