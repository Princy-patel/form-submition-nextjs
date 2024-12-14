import { configureStore } from "@reduxjs/toolkit";
import userDataReducer from "./slice/userSlice";

export const store = configureStore({
  reducer: {
    userData: userDataReducer,
  },
});

export default store;
