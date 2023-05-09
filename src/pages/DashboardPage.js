import React from "react";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
function Settingpage() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light bg-dark"
        style={({ color: "white" }, { padding: "20px" })}
      >
        <div className="container-fluid">
          <Link to="/">
            <a className="navbar-brand" style={{ color: "white" }}>
              Home
            </a>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/AboutPage">
                  <a className="navbar-brand" style={{ color: "white" }}>
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/LoginPage">
                  <a className="navbar-brand" style={{ color: "white" }}>
                    Login
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/SignupPage">
                  <a className="navbar-brand" style={{ color: "white" }}>
                    Signup
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/ContactForm">
                  <a className="navbar-brand" style={{ color: "white" }}>
                    Contact
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              Show More
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="/Settingpage">Setting</Dropdown.Item>
              <Dropdown.Item href="/ProfilesettingPage">
                Profilesetting
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
      </nav>
      <h1>Dashboard</h1>
    </div>
  );
}
export default Settingpage;
