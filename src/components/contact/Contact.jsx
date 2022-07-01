import React from "react";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <h2 className="page-heading">Contact</h2>
      <div className="contact-frm">
        <form>
          <h3>Contact Us</h3>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="Enter Name"
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="Enter email"
              required
              autoComplete="off"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              className="form-control"
              id="message"
              name="message"
              rows="3"
              placeholder="Type your Message Here"
              required
              autoComplete="off"
            ></textarea>
          </div>
          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
