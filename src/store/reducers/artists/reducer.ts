/* eslint-disable no-param-reassign */
// @ts-ignore
import { createReducers } from "redux-arc";

import actions from "./actions";

const INITIAL_STATE = {
  artist: "",
  artists: [],
};

export default createReducers(INITIAL_STATE, {
  [actions.types.GET_ARTISTS.REQUEST]: (
    state: typeof INITIAL_STATE,
    { payload }: { payload: any }
  ) => {
    const isSame = state.artist === payload.artist;

    if (!isSame) {
      return {
        ...INITIAL_STATE,
        artist: payload.artist,
      };
    }

    return state;
  },
  [actions.types.GET_ARTISTS.RESPONSE]: (state: typeof INITIAL_STATE) => {
    return state;
  },
});
