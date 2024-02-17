import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./Auth/index"
export default configureStore({
  reducer: {
    auth:authReducer,
  },
});