import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Dropdown } from "react-bootstrap";

const ProfilesettingPage= () => {
  const [data, setData] = useState([]);
  function getData() {
    axios
      .get("https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app/${id}")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }
  // function handleDelete(id) {
  //   axios
  //     .delete(`https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app/${id}`)
  //     .then(() => {
  //       getData();
  //     });
  // }
  const setToLocalStorage=(email,password)=>{

localStorage.setItem("email",email);
localStorage.setItem("email",password);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
    <div >
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
    <div className="d-flex justify-content-between m-2">
      <h2>Profile</h2>
      
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>

            <th scope="col">Email</th>
            <th scope="col">Password</th>

          </tr>
        </thead>
        {data.map((eachData) => {
          return (
            <>
              <tbody>
                <tr>
                  <th scope="row">{eachData.id}</th>

                  <td>{eachData.name}</td>
                  <td>{eachData.email}</td>
                  <td>{eachData.password}</td>
                  <td>
                    <Link to="/LoginPage">
                      <button
                        className="btn-success"
                        onClick={() =>
                          setToLocalStorage(
                            eachData.id,
                            eachData.name,
                            eachData.email,
                            eachData.password,
                          )
                        }
                      >

                      </button>
                    </Link>
                  </td>
                  {/* <td>
                    <button
                      className="btn-danger"
                      onClick={() => handleDelete(eachData.id)}
                    >
                      Delete
                    </button>
                  </td> */}
                </tr>
              </tbody>

            </>
          );
        })}
      </table>
      </div>
    </>
  );
};

export default ProfilesettingPage;
