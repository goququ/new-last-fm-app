import React from "react";

import Layout from "components/layout";
import CardList from "components/card-list";

import Form from "./form";
import { useArtistsCards, useSyncedList } from "./hooks";

const Artists = () => {
  const { artists } = useArtistsCards();
  const { isLoading, goToNextPage, noSearchQuery } = useSyncedList();

  return (
    <Layout>
      <Form />
      <br />
      <CardList
        isLoading={isLoading}
        items={artists}
        loadMore={goToNextPage}
        noSearchQuery={noSearchQuery}
      />
    </Layout>
  );
};

export default Artists;
