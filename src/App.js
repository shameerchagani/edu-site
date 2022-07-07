import React from "react";
// import { Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Courses from "./components/courses/Courses";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <Routes>
          <Route path="/" element={<Home />} />

          {/* <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="courses" element={<Courses />} />
          <Route path="contact" element={<Contact />} />
  </Routes>*/}
        <Home />
        <div style={{ marginTop: "100px" }} />
        <Courses />
        <div style={{ marginTop: "100px" }} />
        <About />
        <div style={{ marginTop: "100px" }} />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
