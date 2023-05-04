import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <div className="App">
        <nav
          className="navbar navbar-expand-lg navbar-light bg-primary"
          style={({ color: "white" }, { padding: "25px" })}
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
              </ul>
            </div>
          </div>
        </nav>
        <br /> <br />
        <img src="girl.png" alt="Example Image" />
      </div>
    </div>
  );
}
export default HomePage;
