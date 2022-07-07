import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="foo-text">&copy; All Rights Reserved</div>
      <div className="foo-icons">
        <i className="fa-brands fa-facebook-square" />
        <i class="fa-brands fa-twitter-square"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-github-square"></i>
      </div>
    </div>
  );
};

export default Footer;
