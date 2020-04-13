import { reducer as albumsReducer, actions as albumsActions } from "./albums";
import {
  reducer as artistsReducer,
  actions as artistsActions,
} from "./artists";

export const reducers = {
  albums: albumsReducer,
  artists: artistsReducer,
};

export const actions = {
  albums: albumsActions,
  artists: artistsActions,
};
