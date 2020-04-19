// @ts-ignore
import { createActions } from "redux-arc";
import { API_URL } from "config";

export default createActions("artists", {
  getArtists: {
    method: "GET",
    url: API_URL,
    params: {
      method: "artist.search",
    },
  },
});
