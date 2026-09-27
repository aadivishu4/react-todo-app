import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    showToster: false,
  },

  reducers: {
    setToster: (state, action) => {
      state.showToster = action.payload;
    },
  },
});

export const { setToster } = configSlice.actions;

export default configSlice.reducer;
