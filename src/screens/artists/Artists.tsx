import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "components/layout";
import { actions } from "store";

const Artists = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.artists.creators.getArtists({ artist: "xx" }));
  }, [dispatch]);

  return <Layout>artists</Layout>;
};

export default Artists;
