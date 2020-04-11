import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import Layout from "components/layout";

const Home = () => {
  return (
    <Layout>
      <Jumbotron>
        <h1>Hello!</h1>
        <p>This is simple react app for interacting with the Last FM API</p>
        <p>
          <Button as={Link} to="/artists" variant="outline-secondary">
            Go to artists
          </Button>
        </p>
      </Jumbotron>
    </Layout>
  );
};

export default Home;
