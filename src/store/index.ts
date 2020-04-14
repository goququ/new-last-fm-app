import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import thunkMiddleware from "redux-thunk";

import asyncMiddleware from "./asyncMiddleware";
import { reducers } from "./reducers";

const reducer = combineReducers(reducers);

const store = configureStore({
  reducer,
  middleware: [asyncMiddleware, thunkMiddleware],
  devTools: true,
});

export type StoreType = ReturnType<typeof reducer>;

export default store;
export { actions } from "./reducers";
