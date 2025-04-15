import { createSlice } from "@reduxjs/toolkit";

let initialValue = true;


export const themeSlice = createSlice({
  name: "themeSlice",
  initialState: initialValue,
  reducers: {
    toggleTheme: (state) => {
      const newState = !state;
      localStorage.setItem('theme', newState.toString());
      return newState;
    },
    setTheme: (state, action) => action.payload
  }
});

export const { toggleTheme, setTheme } = themeSlice.actions;

export default themeSlice.reducer;
