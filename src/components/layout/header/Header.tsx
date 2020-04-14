import React from "react";
import { Navbar, NavLink, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>LastFM app</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <NavLink as={Link} to="/artists">
            Artists
          </NavLink>
          <NavLink as={Link} to="/albums">
            Albums
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
