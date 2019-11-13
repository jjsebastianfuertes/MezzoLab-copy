import React from "react";
import "./header-styles.css";

const Header = () => {
  return (
    <div>
      <div className="headerContainer">
        <h1 className="headerLogo">MezzoLabCopy</h1>
        <div className="headerContainerLinks">
          <a href="#">
            <h2 className="headerLinks">Works</h2>
          </a>
          <a href="#">
            <h2 className="headerLinks"> Contact</h2>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
