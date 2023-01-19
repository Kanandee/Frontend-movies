import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  user: {},
  movies: []
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    updateMovies: (state, action) => {
      state.movies.push(action.payload);
    },
    removeMovies: (state, action) => {
      const index = state.movies.indexOf(action.payload);
      if (index > -1) { 
        state.movies.splice(index, 1); 
      }
    },
    clearMovies: (state) => {
      state.movies = []
    }
  },
});

export const { login, logout, updateMovies, clearMovies, removeMovies } = authSlice.actions;

export default authSlice.reducer;