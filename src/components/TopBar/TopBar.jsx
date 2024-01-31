import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// using TopBar instead of Navbar to avoid naming collison with react-bootstrap
const TopBar = () => {
  const navigate = useNavigate();
  return (
    <Navbar>
      <span
        onClick={() => {
          navigate("/");
        }}
        className="navbar-brand"
      >
        Moviespur
      </span>
    </Navbar>
  );
};

export default TopBar;
