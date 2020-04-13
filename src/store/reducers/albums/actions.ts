// @ts-ignore
import { createActions } from "redux-arc";
import { API_URL } from "config";

export default createActions("albums", {
  getAlbums: {
    url: API_URL,
    method: "GET",
  },
});
