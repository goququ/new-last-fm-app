import { StoreType } from "../../";

export const getArtists = (store: StoreType) => store.artists.artists;
export const getArtistsTotalPages = (store: StoreType) =>
  Math.ceil(store.artists.total / store.artists.limit);
