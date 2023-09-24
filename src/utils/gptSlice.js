import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
  },
  reducers: {
    toogleGptSearchView: (state, action) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
  },
});

export const { toogleGptSearchView } = gptSlice.actions;

export default gptSlice.reducer;
