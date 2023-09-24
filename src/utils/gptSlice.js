import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
    gptMovieResult: null,
    gptMovieName: null,
  },
  reducers: {
    toogleGptSearchView: (state, action) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGptMoviesResult: (state, action) => {
      const { movieNames, movieResults } = action.payload;
      state.gptMovieName = movieNames;
      state.gptMovieResult = movieResults;
    },
  },
});

export const { toogleGptSearchView, addGptMoviesResult } = gptSlice.actions;

export default gptSlice.reducer;
