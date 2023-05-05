import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const SignupPage = () => {
  // const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //const [nameErr, setNameErr] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };

  const handleSubmit = (e) => {
    e.preventDefault();
    // if(name<1){
    //   setNameErr("Name should not be blank")
    // }
    if (email === "") {
      setEmailErr("Email should not be blank");
    }
    if (password === "") {
      setPasswordErr("Password should not be blank");
    }
    if (password !== "" && email !== "") {
      alert("signed up successfully");
      console.log("clicked");
      axios
        .post("https://reqres.in/api/register", {
          email: email,
          password: password,
          header,
        })
        .then(() => {
          const token = "QpwL5tke4Pnpja7X4";
          localStorage.setItem("token", token);
          history("/LoginPage");
        });
    }
  };

  // const handleNameChange=(event)=>{
  //   setName(event.target.value);
  //   if(event.target.value==='')
  //   setNameErr("please enter your name");
  //   else{
  //       setNameErr("");
  //   }
  // }
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (event.target.value === "") setEmailErr("please enter your email");
    else {
      setEmailErr("");
    }
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value === "") setPasswordErr("please enter your password");
    else {
      setPasswordErr("");
    }
  };
  return (
    <>
      <div
        style={{
          backgroundImage: "url('login1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        }}
      >
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
        <div className="d-flex justify-content-between m-2">
          <h1 className="mt-5 mx-auto" style={{ color: "white" }}>
            Welcome to Signup page
          </h1>
        </div>

        <form
          className="mt-5 mx-auto shadow-lg p-3 mb-5  rounded"
          style={{ maxWidth: "400px" }}
        >
          {/* <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            onChange={handleNameChange}
          />
          {nameErr&&<span style={{color:'red'}}>{nameErr}</span>}
        </div> */}

          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              aria-describedby="emailHelp"
              onChange={handleEmailChange}
            />
            {emailErr && <span style={{ color: "red" }}>{emailErr}</span>}
          </div>
          <div className="mb-3">
            <label className="form-label" style={{ color: "white" }}>
              Password
            </label>
            <input
              type="password"
              className="form-control"
              onChange={handlePasswordChange}
            />
            {passwordErr && <span style={{ color: "red" }}>{passwordErr}</span>}
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={handleSubmit}
          >
            Signup
          </button>

          {/* <Link to="/">
            <button className="btn btn-primary m-2">Home</button>
          </Link> */}
        </form>
      </div>
    </>
  );
};

export default SignupPage;
