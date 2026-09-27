import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import useConfigReducer from "./configSlice";
import useTosterReducer from "./tosterSlice";
import userTodoReducer from "./todoSlice";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    config: useConfigReducer,
    toaster: useTosterReducer,
    todo: userTodoReducer,
  },
});
export default appStore;
