import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Layout from "components/layout";
import CardList from "components/card-list";
import { actions } from "store";

import Form from "./form";
import { useArtistsCards } from "./hooks";

const Artists = () => {
  const artists = useArtistsCards();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.artists.creators.getArtists({ artist: "xx" }));
  }, [dispatch]);

  return (
    <Layout>
      <Form />
      <br />
      <CardList items={artists} />
    </Layout>
  );
};

export default Artists;
