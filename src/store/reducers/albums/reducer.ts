/* eslint-disable no-param-reassign */
// @ts-ignore
import { createReducers } from "redux-arc";

import actions from "./actions";

const INITIAL_STATE = {};

export default createReducers(INITIAL_STATE, {
  [actions.types.GET_ALBUMS.REQUEST || "a"]: (state: any) => {
    return state;
  },
  [actions.types.GET_ALBUMS.RESPONSE || "b"]: (state: any) => {
    return state;
  },
});
