
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";

const SignupPage = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailErr, setEmailErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [error, setError] = useState('');
  const history = useNavigate();
  const header = { "Access-Control-Allow-Origin": "*" };



  const handleSubmit = async(e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app', {
        email,
        password,
      });

      localStorage.setItem('token', response.data.token);

      
    } catch (error) {
      setError('Invalid email/password');
    }

    if(email===""){
      setEmailErr("Email should not be blank")
    }
    if(password===""){
      setPasswordErr("Password should not be blank")
    }
    if(email!=="" && password!=="")
    {
    console.log("clicked");
    axios.post("https://644925ceb88a78a8f0ff1375.mockapi.io/crud-app", {

      email: email,
      password: password,
      header,
    })
    .then(()=>{
      history("/ProfilesettingPage");
    });}
  };


  const handleEmailChange=(event)=>{
    setEmail(event.target.value);
    if(event.target.value==='')
    setEmailErr("please enter your email");
    else{
        setEmailErr("");
    }
  }
  const handlePasswordChange=(event)=>{
    setPassword(event.target.value);
    if(event.target.value==='')
    setPasswordErr("please enter your password");
    else{
        setPasswordErr("");
    }
  }
  return (
    <>
    <div  style={{
      backgroundImage: "url('nature1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      minHeight: '100vh',

    }}>
    <div className="d-flex justify-content-between m-2">
      <h1 className="mt-5 mx-auto">Welcome to Login page</h1>

       </div>

      <form className="mt-5 mx-auto"
            style={{ maxWidth: "400px" }}>


        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            aria-describedby="emailHelp"
            onChange={handleEmailChange}
          />
           {emailErr&&<span style={{color:'red'}}>{emailErr}</span>}
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            onChange={handlePasswordChange}
          />
        {passwordErr&&<span style={{color:'red'}}>{passwordErr}</span>}
        </div>


        <button
          type="submit"
          className="btn btn-primary"
           onClick={handleSubmit}
        >
          Login
        </button>

        <Link to="/">
       <button className="btn btn-primary m-2">Home</button></Link>
       {error && <p>{error}</p>}
      </form>
      </div>
    </>
  );
}

export default SignupPage;
