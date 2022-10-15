import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

import Button from "react-bootstrap/Button";

import Form from "react-bootstrap/Form";

// import PropTypes from "prop-types";

const Navbar = () => {
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg bg-light">
              <div className="container-fluid">
                <Link className="navbar-brand namea" to="/">
                  Adarsh.io
                </Link>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>

                <Form className="d-flex ">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2 width"
                    aria-label="Search"
                  />
                  <Button variant="outline-success" className="search-bar">
                    Search
                  </Button>
                </Form>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/"
                      >
                        Home
                      </Link>
                    </li>
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/about"
                      >
                        About
                      </Link>
                    </li>
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/service"
                      >
                        Service
                      </Link>
                    </li>
                    <li className="nav-item sasur">
                      <Link
                        className="nav-link active"
                        activeClassName="class_active"
                        aria-current="page"
                        to="/contact"
                      >
                        Contact
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
