/* eslint-disable no-param-reassign */
import { createReducer } from "@reduxjs/toolkit";

import actions from "./actions";
import { Artist, ArtistsState } from "./types";

const INITIAL_STATE: ArtistsState = {
  artist: "",
  artists: [],
  limit: 30,
  total: 0,
};

const mapArtists = ({ image, name, url, listeners }: any): Artist => ({
  img: image.pop()["#text"],
  name,
  url,
  listeners,
});

export default createReducer(INITIAL_STATE, {
  [actions.types.GET_ARTISTS.REQUEST]: (
    state: ArtistsState,
    { payload }: { payload: any }
  ) => {
    const isSame = state.artist === payload.artist;

    state.artist = isSame ? state.artist : payload.artist;
    state.artists = isSame ? state.artists : [];
    state.limit = payload.limit;
  },
  [actions.types.GET_ARTISTS.RESPONSE]: (
    state: ArtistsState,
    { payload }: any
  ) => {
    const artists = payload.response?.results?.artistmatches?.artist;

    if (!artists) {
      state.artists = [];
      state.total = 0;
      return;
    }

    const total = payload.response?.results?.["opensearch:totalResults"];

    state.artists = state.artists.concat(artists.map(mapArtists));
    state.total = total;
  },
});
