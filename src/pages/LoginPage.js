import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginPage(){
    const [isFormSubmitted, setIsFormSubmitted] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [city, setCity] = useState("");
    const [monumber, setNumber] = useState("");
    const [nameErr, setNameErr] = useState("false");
    const [numberErr, setNumberErr] = useState("false");

    function loginHandle(e) {
      if (name.length < 1 || monumber.length < 10) {
        alert("type correct values");
      } else {
        setIsFormSubmitted(true);
        alert(
          `The form was submitted succesfully with the ${name} and mobile number ${monumber}`
        );
      }

      e.preventDefault();
    }
    function nameHandler(e) {
      let item = e.target.value;
      if (item.length < 1) {
        setNameErr(true);
      } else {
        setNameErr(false);
      }
      setName(item);
    }
    function monumberHandler(e) {
      let item = e.target.value;
      if (item.length < 10) {
        setNumberErr(true);
      } else {
        setNumberErr(false);
      }
      setNumber(item);
    }
    return (
      <div>
        <h1>Login to my page</h1>
        {!isFormSubmitted ? (
          <form onSubmit={loginHandle}>
            <input type="text" placeholder="Enter name" onChange={nameHandler} />
            {nameErr ? <span></span> : ""}
            <br></br>
            <input
              type="text"
              placeholder="Enter number"
              onChange={monumberHandler}
            />
            {numberErr ? <span></span> : ""}
            <br></br>
            <input
              type="text"
              placeholder="Enter city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <br></br>
            <input
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <br></br>
            <button type="submit">Login</button>
          </form>
        ) : (
          <h2>
            {name}
            <br></br>
            {monumber}
            <br></br>
            {city}
            <br></br>
            {email}
          </h2>
        )}
        <Link to="/"><button className="btn btn-primary">Home</button></Link>
      </div>
    );
}

export default LoginPage
