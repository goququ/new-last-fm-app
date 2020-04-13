/* eslint-disable no-param-reassign */
// @ts-ignore
import { createReducer } from "@reduxjs/toolkit";

import actions from "./actions";

const INITIAL_STATE = {};

export default createReducer(INITIAL_STATE, {
  [actions.types.GET_ALBUMS.REQUEST]: () => {},
  [actions.types.GET_ALBUMS.RESPONSE]: () => {},
});
