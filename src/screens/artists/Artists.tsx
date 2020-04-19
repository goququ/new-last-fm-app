import React from "react";

import Layout from "components/layout";
import CardList from "components/card-list";

import Form from "./form";
import { useArtistsCards, useSyncedList } from "./hooks";

const Artists = () => {
  const { artists } = useArtistsCards();
  const { isLoading, goToNextPage } = useSyncedList();

  return (
    <Layout>
      <Form />
      <br />
      <CardList isLoading={isLoading} items={artists} loadMore={goToNextPage} />
    </Layout>
  );
};

export default Artists;
