import React, { useState } from "react";

import { Link } from "react-router-dom";

import "./navbar.css";
import "../home/Home";
const Navbar = () => {
  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");

  //Detects if the class active or not
  const navToggle = () => {
    active === "nav__menu"
      ? setActive("nav__menu nav__active")
      : setActive("nav__menu");

    //Toggle Icon Animation
    toggleIcon === "nav__toggler"
      ? setToggleIcon("nav__toggler toggle")
      : setToggleIcon("nav__toggler");
  };

  return (
    <nav className="nav">
      <Link to="/home" className="nav__brand">
        EduSite
      </Link>
      <ul className={active}>
        <li className="nav__item">
          <Link to="/home" className="nav__link">
            Home
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/about" className="nav__link">
            About Us
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/courses" className="nav__link">
            Courses
          </Link>
        </li>
        <li className="nav__item">
          <Link to="/contact" className="nav__link">
            Contact Us
          </Link>
        </li>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="one"></div>
        <div className="two"></div>
        <div className="three"></div>
      </div>
    </nav>
  );
};

export default Navbar;
