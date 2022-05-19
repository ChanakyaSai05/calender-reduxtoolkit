import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/calenderSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});
