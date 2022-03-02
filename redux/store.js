import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import { configureStore } from "@reduxjs/toolkit";

import { userSlice } from "./userSlice";

const reducer = {
  user: userSlice.reducer,
};

const middleware = [thunk, createLogger()];

const store = configureStore({
  reducer,
  middleware,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;
