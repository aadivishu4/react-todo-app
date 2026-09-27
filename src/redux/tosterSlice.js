import { createSlice } from "@reduxjs/toolkit";

const toasterSlice = createSlice({
  name: "toaster",

  initialState: {
    show: false,
    type: "",
    message: "",
  },

  reducers: {
    showToster: (state, action) => {
      state.show = true;
      state.type = action.payload.type;
      state.message = action.payload.message;
    },

    hideToster: (state) => {
      state.show = false;
      state.type = "";
      state.message = "";
    },
  },
});

export const { showToster, hideToster } = toasterSlice.actions;

export default toasterSlice.reducer;
