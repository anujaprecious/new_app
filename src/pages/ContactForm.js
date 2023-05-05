import React from "react";
import { Link } from 'react-router-dom';

const ContactForm = () => {
  return (
    <div>
      <h1>
        Contact Form
      </h1>
      <form
        className="mt-5 mx-auto shadow-lg p-3 mb-5  rounded"
        style={{ maxWidth: "600px" }}
      >
        <div className="mb-3">
          <label className="form-label">Your Name</label>
          <input type="text" placeholder="Enter your full name here" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Your company name here"
            aria-describedby="emailHelp"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">company Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter your company email here"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input type="Number" placeholder="Enter your preferrd phone number here" className="form-control" />
        </div>

        <div className="mb-3">
          <label className="form-label">More information</label>
          <input type="text" placeholder="Add Your query and context in this box" className="form-control" />
        </div>

        <button type="submit" className="btn btn-primary">
          SEND MESSAGE
        </button>
      </form>
      <Link to="/"><button className="btn btn-primary">Home</button></Link>
    </div>
  );
};

export default ContactForm;
