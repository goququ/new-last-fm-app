/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";

import actions from "./actions";

const INITIAL_STATE = {
  artist: "",
  artists: [],
};

export default createReducer(INITIAL_STATE, {
  [actions.types.GET_ARTISTS.REQUEST]: (
    state: typeof INITIAL_STATE,
    { payload }: { payload: any }
  ) => {
    const isSame = state.artist === payload.artist;

    state.artist = isSame ? state.artist : payload.artist;
    state.artists = isSame ? state.artists : [];
  },
  [actions.types.GET_ARTISTS.RESPONSE]: (
    state: typeof INITIAL_STATE,
    { payload }: any
  ) => {
    const artists = payload.response.results.artistmatches.artist;
    state.artists = state.artists.concat(artists);
  },
});
