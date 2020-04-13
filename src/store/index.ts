import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import asyncMiddleware from "./asyncMiddleware";
import { reducers } from "./reducers";

const store = configureStore({
  reducer: combineReducers(reducers),
  middleware: [asyncMiddleware, thunkMiddleware],
  devTools: true,
});

export default store;
export { actions } from "./reducers";
