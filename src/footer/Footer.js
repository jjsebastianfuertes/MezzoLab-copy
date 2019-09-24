import React from "react";
import "./footer-styles.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <h3> © MezzoLab 2019</h3>
      <div className="footerContainerLinks">
        <a href="#">
          <h2>Work</h2>
        </a>
        <a href="#">
          <h2>Blog</h2>
        </a>
        <a href="#">
          <h2>Contact</h2>
        </a>
      </div>
    </div>
  );
};

export default Footer;
