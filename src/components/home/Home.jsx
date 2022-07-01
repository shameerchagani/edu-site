import React from "react";
import { Link } from "react-router-dom";

import Courses from "../courses/Courses";

import "./home.css";

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="text-section">
          <h1>For every student, every classroom. Real results.</h1>
          <p>
            We’re a nonprofit with the mission to provide a free, world-class
            education for anyone, anywhere.
          </p>
          <div className="link-section">
            <Link to="/courses" className="btn btn-primary" element={Courses}>
              Browse Courses
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
