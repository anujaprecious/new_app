import React from "react";
import { Link } from "react-router-dom";

function AboutPage() {
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
      </nav>
      <h1>About</h1>
      <h2>
        If anyone wants to quickly understand your brand, your About Us page
        should be the single link you send them.
      </h2>
      <p className="about_page">
        Communicate the story of your business and why you started it. Describe
        the customers or the cause that your business serves. Explain your
        business model or how your products are made. Put a face to your
        business, featuring the founders or the people on your team. Incorporate
        persuasive content (e.g. an explainer video, data visualizations, links
        to blog posts) that might otherwise clutter your homepage.
      </p>
      <img src="cat.jpg" alt="" />
      <br /> <br />
      <h2>What makes a good 'About' page?</h2>
      <p>
        A remarkable about page is genuine, approachable, and distinguished.
        Visitors should get a glimpse into what working with you might be like.
        You can include personal interests, stories, and photos that convey the
        unique story of your business. You may also include information about
        who’s on your team and what their roles are. About pages are personal to
        you and your company, so the structure of your about page will vary
        based on what you want to highlight. However, you’ll start with the same
        writing process. Let’s explore the set-by-step guide to building your
        about page.
      </p>
      <img src="about-cover.png" alt="" />
      <br /> <br />
      <br /> <br />
      {/* <Link to="/">
        <button className="btn btn-primary">Home</button>
      </Link> */}
    </div>
  );
}
export default AboutPage;
